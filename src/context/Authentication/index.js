import { useContext } from "react";
import AuthContext from "./authContext";

export { AuthProvider } from "./AuthProvider";
export const useAuth = () => useContext(AuthContext);
