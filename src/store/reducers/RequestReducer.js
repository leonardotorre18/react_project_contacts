import { sagaActionsTypes } from '../actions/sagaActions';

export const RequestReducer = (state = {
  fetching: false,
  login: false,
  token: null,
  error: null
}, action) => {
  switch (action.type) {
    case sagaActionsTypes.CALL_REQUEST:
      window.localStorage.removeItem('token')
      return {
        ...state,
        fetching: true
      };

    case sagaActionsTypes.CALL_SUCCESS:

      if(action.payload.token) window.localStorage.setItem('token', action.payload.token)
      
      return {
        ...state,
        fetching: false,
        token: action.payload.token,
        login: true,
        error: null
      };

    case sagaActionsTypes.CALL_FAILED:
      console.log(action.payload.error)
      return {
        ...state,
        fetching: false,
        token: null,
        login: false,
        error: action.payload.error
      };
  
    default:

      return state;
  }
}