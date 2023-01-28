import {SET_USER, LOGOUT_USER} from "../actions/user";

const defaultState = {
  name: null,
  email: null
}

const userReduser = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return {name: action.payload.name, email: action.payload.email}

    case LOGOUT_USER:
      return {name: null, email: null}
    default:

      return state
  }
}

export default userReduser;
