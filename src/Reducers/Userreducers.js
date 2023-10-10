const initialState = {
    isAuthenticated: false,
    username: 'Arun AAakarshan',
    userInfo: 'Intern',
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          username: action.payload.username,
          userInfo: action.payload.userInfo,
        };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  
  export default userReducer;
  