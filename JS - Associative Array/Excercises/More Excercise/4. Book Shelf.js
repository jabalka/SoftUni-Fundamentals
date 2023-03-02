function bookShelf(input) {

    let shelfs = {};

    input.forEach((line) => {
        if (line.includes(' -> ')) {
            let [shelfId, shelfGenre] = line.split(' -> ');
            if (!shelfs.hasOwnProperty(shelfId)) {
                shelfs[shelfId] = {};
                shelfs[shelfId][shelfGenre] = [];
            }
        } else if (line.includes(': ')) {
            let [bookTitle, bookAuthor, bookGenre] = line.split(':').join(',').split(', ');
            for(let each of Object.values(shelfs)){
                let genreName = Object.keys(each)[0];
                if(genreName === bookGenre){
                    each[genreName].push([bookTitle, bookAuthor])

                }
           }
        }
    })
    let sortedByCount = Object.entries(shelfs).sort(([shelfIdA, genreBooksA], [shelfIdB, genreBooksB]) => {
        let booksA = Object.values(genreBooksA)[0];
        genreBooksB = Object.entries(genreBooksB);
        let booksB = Object.values(genreBooksB)[0];
        return booksB.length - booksA.length;
    });

    sortedByCount.forEach((element) => {
        let [sheftId, sheftGenre] = Object.values(element);
        let genre = Object.keys(sheftGenre);
        let books = Object.values(sheftGenre)[0];
        console.log(`${sheftId} ${genre}: ${books.length}`);
        books.forEach(([bookTitle, bookAuthor]) => {
            console.log(`--> ${bookTitle}: ${bookAuthor}`);
        })
    }) 
}

bookShelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']);