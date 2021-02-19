import { GET_MOVIES, GET_MOVIE_ID, MovieActionsTypes } from './types';
import axios from 'axios';

type DispatchType = (arg0: MovieActionsTypes) => MovieActionsTypes;

export const getMovies = (title: string): any => async (dispatch: DispatchType) => {
    const { data } = await axios.get(`s=${title}`);
    console.log(data);
};