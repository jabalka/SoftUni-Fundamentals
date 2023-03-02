import {Inject, Injectable} from '@angular/core';
import {
  ARM_TEMPLATE_PROVIDER,
  DocumentDownloadFile,
  DOCUMENT_DOWNLOAD_FILE,
  FilterHelperService,
  LinkGet,
  LOCATION,
  ModuleTabsService,
  OpTypeString,
  PROCESS_EXPORT_WORD_PROVIDER,
  PROCESS_PROVIDER,
  PROCESS_VERSION_PROVIDER,
  Resource,
  RouteParams,
  SETTINGS_PROVIDER,
  UserRights,
  WaitingModelFactoryService,
  WizardActionCommand,
} from '@og/core';
import {NavBarConfigFactoryService} from '@og/nav-bar';
import {a1Promise2Promise, PictureHelperService} from '@og/shared';
import {UserProfile, UserService} from '@og/users';
import {VersionConfig, VersionConfigFactoryService} from '@og/version';
import {ILocationService} from 'angular';
import * as libAccessRights from 'lib/libAccessRights';
import * as libVersion from 'lib/libVersion';
import {makeSetup, VersionSetup, VERSION_STATUS} from 'lib/libVersion';
import * as libProcess from 'lib/Models/libProcess';
import * as libSkill from 'lib/Models/libSkill';
import {ProcessDirectivesTabsParams, ProcessDirectiveTabsNames} from '../types/process-directives-tabs-parameters.interface';
import {ProcessLinkAttributes} from '../types/process-link-attributes.interafce';
import {ProcessLinksContainer} from '../types/process-links-container.interface';
import {Process} from '../types/process.interface';
 
// import {LinkChartConfigFactoryService} from './link-chart-config-factory.service';
 
// TODO - private linkChartConfigFactory: LinkChartConfigFactoryService, // transfert to components inputs
 
interface ProcessViewWizardToolbar {
  version: boolean;
  report: boolean;
}
 
// Depends on this PR -> https://bitbucket.org/ogsadev/todomanager/pull-requests/1522
@Injectable()
export class ProcesssViewWizardService {
  private readonly versionSetup: VersionSetup = makeSetup();
  private hasTemplateAdminView: boolean = false;
  private pendingLinks: LinkGet[] = [];
  private linkGets: LinkGet[] = [];
 
  readonly waitModel = this.waitingModelFactoryService.create({progressBarClass: 'progress-offset'});
  readonly toolbar: ProcessViewWizardToolbar = {version: false, report: false};
  readonly versionShowToolbarConfig: VersionConfig = this.versionConfigFactoryService.create(
    OpTypeString.Process,
    this.waitModel,
    this.processVersionProvider,
    this.versionSetup
  );
 
  readonly navBarConfig = this.intraModuleNavbarFactory.create();
  readonly directivesParams: ProcessDirectivesTabsParams = {
    generalTab: {
      name: ProcessDirectiveTabsNames.generalTab,
      adminView: false,
      process: null,
      customFields: null,
      linkAttributes: null,
      waitModel: this.waitModel,
    },
    inOutTab: {
      name: ProcessDirectiveTabsNames.inOutTab,
      model: null,
      process: null,
    },
    versionsTab: {
      name: ProcessDirectiveTabsNames.versionsTab,
      type: OpTypeString.Process,
      adminView: false,
      itemID: this.routeParams.itemID,
      versionSetup: this.versionSetup,
      basePath: '/process',
      fullVersioning: false,
      waitModel: this.waitModel,
    },
    validationTab: {
      name: ProcessDirectiveTabsNames.validationTab,
      adminView: false,
      item: null,
      type: OpTypeString.Process,
      versionSetup: this.versionSetup,
      provider: this.processVersionProvider,
      fullVersioning: false,
      waitModel: this.waitModel,
    },
    accessRightsTab: {
      name: ProcessDirectiveTabsNames.accessRightsTab,
      templateId: null,
      itemTitle: null,
      itemReference: null,
      type: OpTypeString.Process,
      waitModel: this.waitModel,
    },
  };
 
  loading: boolean = true;
  process: Process = {} as Process;
  adminView: boolean = false;
  processPictureSrc: string = '';
 
  userProfile?: UserProfile;
  userRightsFromTemplate?: UserRights;
  processLinks?: ProcessLinksContainer;
  fullVersioning?: boolean;
 
  constructor(
    private routeParams: RouteParams,
    private pictureHelperService: PictureHelperService,
    private moduleTabsService: ModuleTabsService,
    private userService: UserService,
    private waitingModelFactoryService: WaitingModelFactoryService,
    private filterHelperService: FilterHelperService,
 
    // TODO - private cardOptionsSelectorService: CardOptionsSelectorService,
    private versionConfigFactoryService: VersionConfigFactoryService,
    private intraModuleNavbarFactory: NavBarConfigFactoryService,
    @Inject(LOCATION) private locationService: ILocationService,
    @Inject(PROCESS_PROVIDER) private processProvider: Resource,
    @Inject(SETTINGS_PROVIDER) private settingsProvider: Resource,
    @Inject(ARM_TEMPLATE_PROVIDER) private armTemplateProvider: Resource,
    @Inject(PROCESS_EXPORT_WORD_PROVIDER) private processExportWordProvider: Resource,
    @Inject(DOCUMENT_DOWNLOAD_FILE) private documentDownloadFile: DocumentDownloadFile,
    // TODO - @Inject(PROCESS_WORD_EXPORT_SECTIONS) private processWordExportSections,
    @Inject(PROCESS_VERSION_PROVIDER) public processVersionProvider: Resource
  ) {
    // Enter tab module
    this.moduleTabsService.enterWizard(true, '/module');
  }
 
  // Init service
  async init(): Promise<void> {
    try {
      this.waitModel.wait();
 
      await Promise.all([this.getUser(), this.getProcess(), this.getVersions()]);
      await Promise.all([this.getLinks(this.process.ID), this.getArmRights(this.process, this.userProfile, OpTypeString.Process)]);
      await this.getSettings(this.hasTemplateAdminView, this.process.version.status);
 
      this.setAdminView(
        this.hasTemplateAdminView,
        this.userProfile.sessionParameters.showAsAdmin,
        this.process.version.status,
        this.linkGets,
        this.pendingLinks
      );
 
      this.waitModel.success();
      this.loading = false;
    } catch (errors) {
      this.waitModel.fail(this.filterHelperService.errorCodes(errors));
    }
  }
 
  // Export word sections selector
  requestWordReport(): void {
    const params = {
      type: 'process',
      title: 'processes.modal.title',
      // endPoint: this.processExportWordProvider.multiple,
      // sections: this.processWordExportSections,
      fullVersioning: false,
    };
 
    // this.cardOptionsSelectorService.init(params);
    // this.cardOptionsSelectorService.params.idsList.push(process.ID);
    // // Show options and then request to server
    // this.cardOptionsSelectorService.process();
  }
 
  // Get user profile
  private async getUser(): Promise<void> {
    this.userProfile = await this.userService.getUser();
  }
 
  // Get Process
  private async getProcess(): Promise<void> {
    const {itemID, versionID} = this.routeParams;
    const {$promise} = this.processProvider.get({itemID, versionID});
 
    this.process = await a1Promise2Promise($promise);
 
    // // Link directive params with necessary data
    this.directivesParams.generalTab.process = this.process;
    this.directivesParams.inOutTab.process = this.process;
    this.directivesParams.validationTab.item = this.process;
    this.directivesParams.accessRightsTab.itemTitle = this.process.title;
    this.directivesParams.accessRightsTab.itemReference = this.process.reference;
    this.directivesParams.accessRightsTab.templateId = this.process.armTemplate_ID;
    this.directivesParams.accessRightsTab.creatorItemId = this.process.creatorItemID;
 
    this.moduleTabsService.setPageTitle(this.process.reference);
 
    // Get occurrence picture
    const pictureID = this.process.picture_ID;
    if (pictureID) {
      this.processPictureSrc = this.pictureHelperService.getPictureUrl(OpTypeString.Process, this.process.ID, pictureID);
    }
  }
 
  // Get versions
  private async getVersions(): Promise<void> {
    const {itemID} = this.routeParams;
    const {$promise} = this.processVersionProvider.get({itemID});
    const {value} = await a1Promise2Promise($promise);
 
    libVersion.assignSetup(this.versionSetup, value);
  }
 
  // Get user rigths
  private async getArmRights(process: Process, userProfile: UserProfile, module: OpTypeString): Promise<void> {
    const armTemplate_Id = process.armTemplate_ID;
    const isCreator = userProfile.itemID === process.creatorItemID;
    const {$promise} = this.armTemplateProvider.userRightsOnTemplate({armTemplate_Id, isCreator, module});
 
    this.userRightsFromTemplate = await a1Promise2Promise($promise);
    this.hasTemplateAdminView = libAccessRights.hasTemplateAdminView(this.userRightsFromTemplate);
  }
 
  // Get settings
  private async getSettings(hasTemplateAdminView: boolean, processVersionStatus: VERSION_STATUS): Promise<void> {
    const {$promise} = this.settingsProvider.allAsObjectCached({});
    const settings = await a1Promise2Promise($promise);
 
    // Gets linksattribute
    const linkAttributes: ProcessLinkAttributes = {
      skill: libSkill.GetSkillLinkAttributes(OpTypeString.Process.toLowerCase(), settings.skillsLevels),
      processRaci: settings.processRaciCustomFields ? JSON.parse(settings.processRaciCustomFields) : null,
    };
 
    if (settings.processRaciCustomFields) {
      this.directivesParams.generalTab.customFields = JSON.parse(settings.processRaciCustomFields);
    }
 
    this.directivesParams.generalTab.linkAttributes = linkAttributes;
 
    // Get tab settings for admins and collabs
    let tabsSettings: string[] | undefined;
    if (settings.collabProcessTabs && settings.adminProcessTabs) {
      // Decide which tab settings to display, if admin or not
      tabsSettings = JSON.parse(hasTemplateAdminView ? settings.adminProcessTabs : settings.collabProcessTabs);
      this.navBarConfig.configure(tabsSettings);
    }
 
    // Create directive params : depends on if user is admin or not
    this.fullVersioning = !JSON.parse(settings.versioning).itemAutoValid.Process;
    this.versionShowToolbarConfig.fullVersioning = this.fullVersioning;
    this.directivesParams.versionsTab.fullVersioning = this.fullVersioning;
    this.directivesParams.validationTab.fullVersioning = this.fullVersioning;
 
    // If no tab specified AND it is a version under review : attempt to switch to the "validation" tab
    const search = this.locationService.search();
    const {command} = this.routeParams;
    const validationCommand = WizardActionCommand.validation;
 
    if (
      !search.activeTab &&
      command !== validationCommand &&
      tabsSettings.includes(validationCommand) &&
      processVersionStatus === VERSION_STATUS.review
    ) {
      this.navBarConfig.setViewTab(validationCommand);
    }
  }
 
  // Get Links
  private async getLinks(guid: string): Promise<void> {
    const {$promise} = this.processProvider.getLinks({guid});
 
    this.linkGets = await a1Promise2Promise($promise);
  }
 
  // Set admin view
  private setAdminView(
    hasTemplateAdminView: boolean,
    showAsAdmin: boolean,
    versionStatus: VERSION_STATUS,
    linkGets: LinkGet[],
    pendingLinks: LinkGet[]
  ): void {
    const adminView = hasTemplateAdminView && showAsAdmin;
 
    this.adminView = adminView;
    this.processLinks = libProcess.extractLinks(adminView, versionStatus, linkGets, pendingLinks, this.documentDownloadFile);
 
    this.directivesParams.generalTab.model = this.processLinks;
    this.directivesParams.generalTab.adminView = adminView;
    this.directivesParams.validationTab.adminView = adminView;
    this.directivesParams.versionsTab.adminView = adminView;
    this.directivesParams.inOutTab.model = this.processLinks;
  }
}   