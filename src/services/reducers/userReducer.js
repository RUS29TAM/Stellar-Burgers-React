import {SET_USER, LOGOUT_USER, USER_LOADING, USER_ACCEPT, USER_ERROR} from "../actions/userAction";

const initialState = {
  name: null,
  email: null,
  accept : false,
  loading: false,
  error: false,
  errorMessage: null,
}

export const userReducer = (state= initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {name: action.payload.name, email: action.payload.email, accept: true, loading: false, error: false, errorMessage: null}

    case USER_LOADING:
      return {name: null, email: null, loading: true, accept: false, error: false, errorMessage: null}

    case USER_ACCEPT:
      return {name: action.payload.name, email: action.payload.email ,loading: false, accept: true, error: false, errorMessage: null}

    case USER_ERROR:
      return {name: null, email: null,loading: false, accept: false, error: true, errorMessage: action.payload}

    case LOGOUT_USER:
      return {name: null, email: null, accept: false, loading: false, error: false, errorMessage: null}
    default:

      return state
  }
}

