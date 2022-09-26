export default (state, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_TOKEN':
      return {
        ...state,
        token: action.payload,
        isSignedIn: true,
      };
  }
};
