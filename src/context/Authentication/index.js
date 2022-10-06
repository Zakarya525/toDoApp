import AuthContext from './authContext';
import { useContext } from 'react';

export { AuthProvider } from './AuthProvider';
export const useAuth = () => useContext(AuthContext);
