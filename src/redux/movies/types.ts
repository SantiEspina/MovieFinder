export interface MovieState {
    movies: any;
    movieId: any;
};

export const GET_MOVIES: string = 'GET_MOVIES';
export const GET_MOVIE_ID: string = 'GET_MOVIE_ID';

interface GetMovies {
    type: typeof GET_MOVIES;
    payload: any;
};

interface GetMovieId {
    type: typeof GET_MOVIE_ID;
    payload: any;
};

export type MovieActionsTypes = GetMovies | GetMovieId;