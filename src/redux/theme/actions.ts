import { ThemeProvider } from '@react-navigation/native';
import { THEME, ThemeActionsTypes } from './types';

type DispatchType = (arg0: ThemeActionsTypes) => ThemeActionsTypes;

export const toggleTheme = (): ThemeActionsTypes => {
    return {
        type: THEME
    }
};