import { themes } from '/src/style/Themes';

// THEME RELATED
export const getSystemTheme = () => (window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

export const systemThemeChangeHandler = (e, setTheme) => { setTheme(e.matches ? 'dark' : 'light'); };

export const getTheme = (theme) => (theme === 'light' ? themes.light : themes.dark);
