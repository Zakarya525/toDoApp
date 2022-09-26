import AuthContext from './authContext';
import getToken from '../../services/getToken';
import AuthReducer from './authReducer';
import { useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getUser from '../../services/getUser';
import setUser from '../../services/setUser';

const AuthState = ({ children }) => {
  const initialState = {
    user: {},
    isSignedIn: false,
    token: AsyncStorage.getItem('token'),
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const signIn = (username, password) => {
    getToken({
      username,
      password,
    }).then((res) => {
      if (res.status === 200) {
        AsyncStorage.setItem('token', res.data.access_token);
        getUser({ token: res.data.access_token }).then((res) => {
          if (res.status === 200) {
            dispatch({
              type: 'GET_USER',
              payload: res.data,
            });
          }
        });
        dispatch({
          type: 'GET_TOKEN',
          payload: res.data.access_token,
        });
      }
    });
  };

  const signUp = (username, email, password) => {
    setUser({ username, email, password }).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        dispatch({
          type: 'SET_USER',
          payload: res.data,
        });
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isSignedIn: state.isSignedIn,
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
