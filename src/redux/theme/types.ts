export interface ThemeState {
    theme: boolean;
};

export const THEME: string = 'THEME';

interface ToggleTheme {
    type: typeof THEME;
};

export type ThemeActionsTypes = ToggleTheme;