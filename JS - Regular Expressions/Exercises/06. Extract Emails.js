function extractEmails(input){

    const regexEmail = /(?<user>[A-Za-z0-9]+([\_\-\.]?)+[A-Za-z0-9]+)@(?<host>[A-Za-z0-9]+([\-]?)[A-Za-z0-9]+\.[A-Za-z0-9]+([\.]?)[A-Za-z0-9]+)/g;

    let emails = input.match(regexEmail);
    emails.forEach(email => console.log(email))

}

extractEmails('Please contact us at: support@github.com.')
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de')