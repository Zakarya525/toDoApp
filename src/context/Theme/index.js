import ThemeContext from './themeContext';
import { useContext } from 'react';

export { ThemeProvider } from './ThemeProvider';
export const useTheme = () => useContext(ThemeContext);
