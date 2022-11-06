export default (state, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        token: action.token,
        isLoading: false,
      };

    case 'LOGIN_USER_AND_GET_TOKEN':
      return {
        ...state,
        token: action.token,
        isLoading: false,
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };

    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      };

    case 'LOGOUT':
      return {
        ...state,
        isLoading: false,
        token: '',
        user: {},
      };

    case 'SET_LOADING_FALSE':
      return {
        ...state,
        isLoading: false,
      };
  }
};
