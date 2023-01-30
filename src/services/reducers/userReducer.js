import {SET_USER, LOGOUT_USER} from "../actions/user";

const initialState = {
  name: null,
  email: null
}

export const userReducer = (state= initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {name: action.payload.name, email: action.payload.email}

    case LOGOUT_USER:
      return {name: null, email: null}
    default:

      return state
  }
}

