import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk, {ThunkDispatch} from 'redux-thunk';
import rootReducer from "../services/reducers/root-reducer";
import socketMiddleware from "../middleware/socket-middleware";

import {AppActions} from "../services/actions";
import {wsFeedActions} from "../services/actions/ws-orders-feeds-action";
import {wsUserActions} from "../services/actions/ws-user-orders-action";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, socketMiddleware(wsFeedActions), socketMiddleware(wsUserActions))));

export type RootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch & ThunkDispatch<RootState, any, AppActions>
export default store;
