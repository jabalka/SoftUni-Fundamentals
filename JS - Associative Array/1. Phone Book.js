function phoneBook(input){

    let catalogue = {};

    for(let each of input){
        let [name, phone] = each.split(' ');
        catalogue[name] = phone;
    }
    Object.entries(catalogue).forEach(person => console.log(`${person[0]} -> ${person[1]}`)); 



}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)