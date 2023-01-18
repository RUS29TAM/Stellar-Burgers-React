import {SET_INGREDIENT} from "../actions/ingredientDetails";

const initialState = {
  ingredient: null,
}

const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT:
      return {ingredient: action.payload}
    default:
      return state
  }
}

export default ingredientDetailsReducer;
