function commentsData(input) {

    let users = {};
    let articles = {};

    input.forEach((line) => {
        if (line.includes('user')) {
            let username = line.split('user ').join('');
            if (!users.hasOwnProperty(username)) {
                users[username] = [];
            }
        } else if (line.includes('article')) {
            let articleName = line.split('article ').join('');
            if (!articles.hasOwnProperty(articleName)) {
                articles[articleName] = [];
            }
        } else if (line.includes('posts on')) {
            let [userName, articleNameInfo] = line.split(' posts on ');
            let [articleName, commentTitle, comment] = articleNameInfo.split(':').join(',').split(', ')
            if (users.hasOwnProperty(userName) && articles.hasOwnProperty(articleName)) {
                articles[articleName].push([userName, commentTitle, comment]);
            }
        }
    })
    let sortedCommentsCount = Object.entries(articles)
        .sort(([articleNameA, commentsA], [articleNameB, commentsB]) => {
            return commentsB.length - commentsA.length;
        }).forEach((each) => {
            let [articleName, comments] = each;
            comments.sort(([userNameA, a, aa], [userNameB, b, bb]) => userNameA.localeCompare(userNameB));
            console.log(`Comments on ${articleName}`);
            for (let comment of comments) {
                let [userName, commentTitle, content] = comment;
                console.log(`--- From user ${userName}: ${commentTitle} - ${content}`);
            }
        });
}

commentsData(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'])