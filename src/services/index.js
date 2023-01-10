import { applyMiddleware, combineReducers, createStore, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { burgerConstructorReducer } from './reducers/burger-constructor-reducer';
import { ingredientsReducer } from './reducers/ingredients-reducer';
import thunk from 'redux-thunk';
import { detailsModalReducer } from './reducers/details-modal-reducer';
import { orderReducer } from './reducers/order-reducer';
import { configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  detailsModal: detailsModalReducer,
  order: orderReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
