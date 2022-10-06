import { getUserMe, loginUser, registerUser } from '@services/user/api';
import { useEffect, useReducer } from 'react';

import AuthContext from './authContext';
import AuthReducer from './authReducer';
import storage from '@app/storage';

export const AuthProvider = ({ children }) => {
  const initialState = {
    user: {},
    isLoading: false,
    token: '',
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Get user token
  const signIn = (username, password) => {
    setLoading();
    loginUser(username, password).then((res) => {
      if (res.status === 200) {
        storage.set('token', res.data.access_token);
        dispatch({
          type: 'LOGIN_USER_AND_GET_TOKEN',
          token: res.data.access_token,
        });
      }
    });
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  //Get user data
  useEffect(() => {
    setLoading();
    storage.get('token').then((token) => {
      getUserMe(token).then((res) => {
        if (res.status === 200) {
          dispatch({
            type: 'GET_USER',
            payload: res.data,
            token: token,
          });
        }
      });
    });
  }, []);

  //Register a new user
  const signUp = (username, email, password) => {
    setLoading();
    registerUser({ username, email, password }).then((res) => {
      if (res.status === 200) {
        signIn(username, password);
      }
    });
  };

  const logOut = () => {
    storage.remove('token');
    dispatch({
      type: 'LOGOUT',
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
