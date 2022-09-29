import AuthContext from "./authContext";
import getToken from "../../services/getToken";
import AuthReducer from "./authReducer";
import { useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getUser from "../../services/getUser";
import setUser from "../../services/setUser";

export const AuthProvider = ({ children }) => {
  const initialState = {
    user: {},
    isLoading: false,
    token: "",
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Get user token
  const signIn = (username, password) => {
    setLoading();
    getToken({
      username,
      password,
    }).then((res) => {
      if (res.status === 200) {
        AsyncStorage.setItem("token", res.data.access_token);
        dispatch({
          type: "GET_TOKEN",
          token: res.data.access_token,
        });
      }
    });
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  //Get user data
  useEffect(() => {
    setLoading();

    const getToken = async () => await AsyncStorage.getItem("token");

    getToken().then((t) => {
      getUser({ token: t }).then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "GET_USER",
            payload: res.data,
            token: t,
          });
        }
      });
    });
  }, []);

  //Register a new user
  const signUp = (username, email, password) => {
    setUser({ username, email, password }).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        dispatch({
          type: "SET_USER",
          payload: res.data,
        });
      }
    });
  };

  const logOut = () => {
    AsyncStorage.removeItem("token");
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading: state.isLoading,
        user: state.user,
        token: state.token,
        signIn,
        signUp,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
