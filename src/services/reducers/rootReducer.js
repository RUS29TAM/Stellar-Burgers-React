import {combineReducers} from "redux";
import {ingredientsReducer} from "./ingredientsReducer";
import {burgerConstructorReducer} from "./burgerConstructorReducer";
import {detailsModalReducer} from "./detailsModalReducer";
import {orderReducer} from "./orderReducer";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  detailsModal: detailsModalReducer,
  order: orderReducer,
});

export default rootReducer;
