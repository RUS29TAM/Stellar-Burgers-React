import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk, {ThunkDispatch} from 'redux-thunk';
import rootReducer from "../services/reducers/rootReducer";
import socketMiddleware from "../middleware/socketMiddleware";

import {AppActions} from "../services/actions";
import {wsFeedActions} from "../services/actions/wsOrdersFeedsAction";
import {wsUserActions} from "../services/actions/wsUserOrdersAction";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, socketMiddleware(wsFeedActions), socketMiddleware(wsUserActions))));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, any, AppActions>
export default store;
