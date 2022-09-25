import AuthContext from './authContext';
import getUser from '../../services/getUser';
import AuthReducer from './authReducer';
import { useReducer } from 'react';

const AuthState = ({ children }) => {
  const initialState = {
    user: {},
    isSignedIn: false,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const signIn = (username, password) => {
    const res = getUser({
      username: username,
      password: password,
    }).then((result) => {
      if (result.status === 200) {
        console.log('You are successfully Logged In');
        dispatch({
          type: 'GET_USER',
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
        signIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
