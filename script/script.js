let numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');

let personalMovieBD = {
    count: (numberOfFilms),
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let lastOfFilmsOne = prompt('Один из просмотренных фильмов?', '');
let lastOfFilmsTwo = prompt('Один из просмотренных фильмов?', '');
let scoreOfFilmsOne = prompt('Насколько оцените его?', '');
let scoreOfFilmsTwo = prompt('Насколько оцените его?', '');

personalMovieBD.movies[lastOfFilmsOne] = scoreOfFilmsOne;
personalMovieBD.movies[lastOfFilmsTwo] = scoreOfFilmsTwo;
