function foreignLanguage(arg){

    let countryGiven = arg;
    let languageSpoken = "";
     
    switch(countryGiven){
        case "England": languageSpoken = "English"; break;
        case "USA": languageSpoken = "English"; break;
        case "Spain": languageSpoken = "Spanish"; break;
        case "Argentina": languageSpoken = "Spanish"; break;
        case "Mexico": languageSpoken = "Spanish"; break;
        default: languageSpoken = "unknown"; break;
    }
    console.log(languageSpoken);
}

foreignLanguage("USA");

foreignLanguage("Germany")