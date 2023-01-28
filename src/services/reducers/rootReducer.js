import {combineReducers} from "redux";
import {ingredientsReducer} from "./ingredientsReducer";
import {burgerConstructorReducer} from "./burgerConstructorReducer";
import {orderReducer} from "./orderReducer";
import ingredientDetailsReducer from "./IngredientDetailsReducers";
import useReducer from "react";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
  useReducer: useReducer,
});

export default rootReducer;
