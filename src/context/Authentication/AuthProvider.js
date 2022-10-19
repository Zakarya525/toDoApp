import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getToken from '../../services/user/getToken';
import getUser from '../../services/user/getUser';
import setUser from '../../services/user/setUser';
import storage from '../../storage';

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
    getToken({
      username,
      password,
    }).then((res) => {
      if (res?.status === 200) {
        storage.set('token', res.data.access_token);
        getUser({ token: res.data.access_token }).then((res) => {
          if (res?.status === 200)
            dispatch({
              type: 'GET_USER',
              token: res.data.access_token,
              payload: res.data,
            });
          else {
            console.log('User not found');
            dispatch({
              type: 'SET_LOADING_FALSE',
            });
          }
        });
      } else {
        console.log('User not found');
        dispatch({
          type: 'SET_LOADING_FALSE',
        });
      }
    });
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  //Get user data
  useEffect(() => {
    setLoading();
    const getToken = async () => await AsyncStorage.getItem('token');

    getToken().then((t) => {
      if (t !== null) {
        getUser({ token: t }).then((res) => {
          if (res.status === 200) {
            dispatch({
              type: 'GET_USER',
              payload: res.data,
              token: t,
            });
          }
        });
      } else
        dispatch({
          type: 'GET_TOKEN',
          token: '',
        });
    });
  }, [state.user.username, state.user.email]);

  //Register a new user
  const signUp = (username, email, password) => {
    setLoading();
    setUser({ username, email, password }).then((res) => {
      if (res.status === 200) {
        signIn(username, password);
      }
    });
  };

  const logOut = async () => {
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
      }}>
      {children}
    </AuthContext.Provider>
  );
};
