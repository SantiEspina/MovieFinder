import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { useDispatch } from 'react-redux';

import { moviesReducer } from './movies/reducer';
import { themeReducer } from './theme/reducer';

const composeEnhancer = compose;
const rootReducer = combineReducers({ movies: moviesReducer, tema: themeReducer });

export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();


