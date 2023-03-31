import {combineReducers} from "redux";
import {ingredientsReducer} from "./ingredients-reducer";
import {burgerConstructorReducer} from "./burger-constructor-reducer";
import {orderReducer} from "./order-reducer";
import {ingredientDetailsReducer} from "./ingredient-details-reducer";
import {userReducer} from "./user-reducer";
import {wsOrdersFeedReducer} from "./ws-orders-feed-reducer";
import {wsUserOrderReducer} from "./ws-user-orders-reducer";

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
