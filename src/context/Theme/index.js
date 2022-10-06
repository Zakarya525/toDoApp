import { useContext } from 'react';
import ThemeContext from './themeContext';

export { ThemeProvider } from './ThemeProvider';
export const useTheme = () => useContext(ThemeContext);
