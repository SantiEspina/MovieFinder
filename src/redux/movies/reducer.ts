import { GET_MOVIES, GET_MOVIE_ID, MovieState } from './types';

const initialState: MovieState = {
    movies: [],
    movieId: [],
};

export function moviesReducer(state = initialState, action: any): MovieState {
    switch(action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case GET_MOVIE_ID:
            return {
                ...state,
                movieId: action.payload
            }
        default: return state;
    };
};