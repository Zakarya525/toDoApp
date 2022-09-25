export default (state, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        isSignedIn: true,
      };
  }
};
