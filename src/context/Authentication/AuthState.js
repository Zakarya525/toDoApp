import AuthContext from './authContext';
import getToken from '../../services/getToken';
import AuthReducer from './authReducer';
import { useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getUser from '../../services/getUser';
import setUser from '../../services/setUser';

const AuthState = ({ children }) => {
  const initialState = {
    user: {},
    isLoading: false,
    token: '',
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
        AsyncStorage.setItem('token', res.data.access_token);
        dispatch({
          type: 'GET_TOKEN',
          token: res.data.access_token,
        });
      }
    });
  };

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

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <AuthContext.Provider
      value={{
        isLoading: state.isLoading,
        user: state.user,
        token: state.token,
        signIn,
        signUp,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
