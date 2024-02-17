// src/reducers/authReducer.js
const initialState = {
    user: null,
    isAuthenticated: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload.user,
          isAuthenticated: true,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          error: action.payload.error,
        };
      case 'SIGNUP_SUCCESS':
        return {
          ...state,
          user: action.payload.user,
          isAuthenticated: true,
          error: null,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  