function extractFile(str) {

    // let indexDot = str.lastIndexOf('.');
    let extension = str.substring(str.lastIndexOf('.') + 1);
    let indexSlash = str.lastIndexOf('\\');
    let fileName = str.substring(indexSlash + 1, str.lastIndexOf('.'));
    console.log(`File name: ${fileName} \nFile extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');