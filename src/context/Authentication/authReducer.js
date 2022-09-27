export default (state, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        token: action.token,
        isLoading: false,
      };

    case 'GET_TOKEN':
      return {
        ...state,
        token: action.payload,
        isLoading: false,
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isSignedIn: true,
      };

    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
  }
};
