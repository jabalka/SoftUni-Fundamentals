function moviesData(inputArray) {

    let moviesList = [];

    for (let line of inputArray) {
        if (line.includes('addMovie')) {
            let movie = {};
            movie.name = line.substring(9);
            moviesList.push(movie)
        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            let myMovie = moviesList.find(x => x.name === name);
            if (myMovie) {
                myMovie.director = director;
            }
        } else {
            let [name, date] = line.split(' onDate ');
            let myMovie = moviesList.find(x => x.name === name);
            if (myMovie) {
                myMovie.date = date;
            }
        }
    }

    moviesList.forEach(movie => {
        if (movie.name && movie.date && movie.director) {
            console.log(JSON.stringify(movie))
        }
    })
}

moviesData([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)