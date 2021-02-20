export interface MovieState {
    movies: Movie[];
    movieId: MovieID;
    loader: boolean;
};

export const GET_MOVIES: string = 'GET_MOVIES';
export const GET_MOVIE_ID: string = 'GET_MOVIE_ID';
export const LOADER: string = 'LOADER';

interface GetMovies {
    type: typeof GET_MOVIES;
    payload: Movie[];
};

interface GetMovieId {
    type: typeof GET_MOVIE_ID;
    payload: MovieID;
};

interface Loader {
    type: typeof LOADER;
};

export interface Movie {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
};

export interface MovieID {
    Actors?: string;
    Awards?: string;
    BoxOffice?: string;
    Country?: string;
    Director?: string;
    Genre?: string;
    Language?: string;
    Plot?: string;
    Poster?: string;
    Runtime?: string;
    Title?: string;
    Released?: string;
    imdbRating?: string;
    imdbVotes?: string;    
};

export type MovieActionsTypes = GetMovies | GetMovieId | Loader;