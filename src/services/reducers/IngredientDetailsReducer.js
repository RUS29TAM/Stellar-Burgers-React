import {SET_INGREDIENT} from "../actions/ingredientDetailsAction";

const initialState = {
  ingredient: null,

}

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT:
      return {ingredient: action.payload}
    default:
      return state
  }
}

