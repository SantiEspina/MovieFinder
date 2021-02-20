import { THEME, ThemeState } from './types';

const initialState: ThemeState = {
    theme: true
};

export function themeReducer(state = initialState, action: any): ThemeState {
    switch(action.type) {
        case THEME:
            return {
                ...state,
                theme: !state.theme
            }
        default: return state;
    }
};