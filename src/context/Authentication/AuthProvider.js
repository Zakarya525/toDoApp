import AuthContext from "./authContext";
import getToken from "../../services/getToken";
import AuthReducer from "./authReducer";
import { useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getUser from "../../services/getUser";
import setUser from "../../services/setUser";
import storage from "../../storage";

export const AuthProvider = ({ children }) => {
  const initialState = {
    user: {},
    isLoading: false,
    token: "",
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Get user token
  const signIn = (username, password) => {
    console.log(username, password);
    setLoading();
    getToken({
      username,
      password,
    }).then((res) => {
      if (res.status === 200) {
        storage.set("token", res.data.access_token);
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
      if (t !== null) {
        getUser({ token: t }).then((res) => {
          if (res.status === 200) {
            dispatch({
              type: "GET_USER",
              payload: res.data,
              token: t,
            });
          }
        });
      } else
        dispatch({
          type: "GET_TOKEN",
          token: "",
        });
    });
  }, []);

  //Register a new user
  const signUp = (username, email, password) => {
    setLoading();
    setUser({ username, email, password }).then((res) => {
      if (res.status === 200) {
        signIn(username, password);
      }
    });
  };

  const logOut = () => {
    storage.remove("token");
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
