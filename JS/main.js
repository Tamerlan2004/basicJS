const numberOfFilms = prompt("сколько фильмов вы уже посмотрели?",'');
let personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const movieName = prompt("Один из последних просмотренных фильмов?"),
    movieRating = prompt("на сколько оцените его?"),
    movieName2 = prompt("Один из последних просмотренных фильмов?"),
    movieRating2 = prompt("на сколько оцените его?");
personalMovieDB.movies[movieName]= movieRating;
personalMovieDB.movies[movieName2]= movieRating2;
console.log(personalMovieDB);

