import {combineReducers} from "redux";
import {ingredientsReducer} from "./ingredientsReducer";
import {burgerConstructorReducer} from "./burgerConstructorReducer";
import {orderReducer} from "./orderReducer";
import {ingredientDetailsReducer} from "./IngredientDetailsReducer";
import {userReducer} from "./userReducer";
import {wsOrdersFeedReducer} from "./wsOrdersFeedReducer";
import {wsUserOrderReducer} from "./wsUserOrdersReducer";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
  userReducer: userReducer,
  wsOrdersReducer: wsOrdersFeedReducer,
  wsUserOrderReducer: wsUserOrderReducer,
});

export default rootReducer;
