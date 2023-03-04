import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "../services/reducers/rootReducer";
import socketMiddleware from "../middleware/socketMiddleware ";
import {createWSActions} from "../utils/createWSActions";
import {
    WS_ORDERS_FEEDS_CONNECT, WS_ORDERS_FEEDS_DISCONNECT,
    wsOrdersFeedsConnectingAction, wsOrdersFeedsDisconnectingAction,
    wsOrdersFeedsErrAction, wsOrdersFeedsGetMessageAction
} from "../services/actions/wsOrdersFeedsAction";
import {
    WS_ORDERS_USER_CONNECT, WS_ORDERS_USER_DISCONNECT,
    wsOrdersUserConnectingAction, wsOrdersUserDisconnectingAction,
    wsOrdersUserErrAction, wsOrdersUserGetMessageAction
} from "../services/actions/wsUserOrdersAction";

const wsFeedActions = createWSActions(wsOrdersFeedsErrAction, wsOrdersFeedsConnectingAction, WS_ORDERS_FEEDS_CONNECT, wsOrdersFeedsDisconnectingAction, wsOrdersFeedsGetMessageAction, WS_ORDERS_FEEDS_DISCONNECT)
const wsUserActions = createWSActions(wsOrdersUserErrAction, wsOrdersUserConnectingAction, WS_ORDERS_USER_CONNECT, wsOrdersUserDisconnectingAction, wsOrdersUserGetMessageAction, WS_ORDERS_USER_DISCONNECT)
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, socketMiddleware(wsFeedActions), socketMiddleware(wsUserActions))));
