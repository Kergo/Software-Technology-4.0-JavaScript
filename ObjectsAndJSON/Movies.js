function solve(input) {
    let movies = [];

    for (let inputRows of input) {
        if (inputRows.includes('add movie')) {
            let tockens = inputRows.split('add movie ');
            let movieName = tockens[1];
            addMovie(movieName);
        }
        else if (inputRows.includes('directed by')) {
            let [movieName, director] = inputRows.split(' directed by ');
            addDirector(movieName, director);
        }
        else {
            let [movieName, date] = inputRows.split(' on date ');
            addDate(movieName, date);
        }
    }

    for (let movie of movies) {
        if (movie.hasOwnProperty('name')
             && movie.hasOwnProperty('director')
             && movie.hasOwnProperty('date')) {
            console.log(JSON.stringify(movie));
        }
    }

    function addMovie(movieName) {
        movies.push({ name: movieName });
    }

    function addDirector(movieName, directorName) {
        let foundMovie = movies.find(m => m.name === movieName);

        if (foundMovie) {
            foundMovie.director = directorName
        }
    }

    function addDate(movieName, date) {
        let foundMovie = movies.find(m => m.name === movieName)

        if (foundMovie) {
            foundMovie.date = date;
        }
    }
}

solve([
'add movie Fast and Furious',
'add movie Godfather',
'Inception directed by Christopher Nolan',
'Godfather directed by Francis Ford Coppola',
'Godfather on date 29.07.2018',
'Fast and Furious on date 30.07.2018',
'Batman on date 01.08.2018',
'Fast and Furious directed by Rob Cohen'
]);