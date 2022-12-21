import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { ingredientsReducer } from './reducers/ingredients-reducer';
import { burgerConstructorReducer } from './reducers/burger-constructor-reducer';
import { detailsModalReducer } from './reducers/details-modal-reducer';
import { orderReducer } from './reducers/order-reducer';

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
