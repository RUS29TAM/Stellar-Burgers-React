import {combineReducers} from "redux";
import {ingredientsReducer} from "./ingredientsReducer";
import {burgerConstructorReducer} from "./burgerConstructorReducer";
import {orderReducer} from "./orderReducer";
import {ingredientDetailsReducer} from "./IngredientDetailsReducers";
import {userReducer} from "./userReducer";
import {wsOrdersFeedReducer} from "./wsOrdersFeedReducer";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
  userReducer: userReducer,
  wsOrdersReducer: wsOrdersFeedReducer,
});

export default rootReducer;
