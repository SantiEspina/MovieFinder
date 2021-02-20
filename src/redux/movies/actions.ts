import { GET_MOVIES, GET_MOVIE_ID, LOADER, MovieActionsTypes } from './types';
import axios from 'axios';
import { API_KEY } from '@env';

type DispatchType = (arg0: MovieActionsTypes) => MovieActionsTypes;

export const getMovies = (title: string): any => async (dispatch: DispatchType) => {
    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`);
    if(data.Response === 'False') {
        return dispatch({ type: LOADER })
    } else {
       return dispatch({ type: GET_MOVIES, payload: data.Search})
    }
};

export const getMovieId = (id: string): any => async (dispatch: DispatchType) => {
    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
    return dispatch({ type: GET_MOVIE_ID, payload: data });
};