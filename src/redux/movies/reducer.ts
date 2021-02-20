import { GET_MOVIES, GET_MOVIE_ID, LOADER, MovieState } from './types';

const initialState: MovieState = {
    movies: [],
    movieId: {},
    loader: true
};

export function moviesReducer(state = initialState, action: any): MovieState {
    switch(action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loader: false
            }
        case GET_MOVIE_ID:
            return {
                ...state,
                movieId: action.payload
            }
        case LOADER:
            return {
                ...state,
                loader: true,
                movies: []
            }
        default: return state;
    };
};