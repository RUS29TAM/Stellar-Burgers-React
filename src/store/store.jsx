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
     wsOrdersUserConnectingAction, wsOrdersUserDisconnectingAction,
    wsOrdersUserErrAction, wsOrdersUserGetMessageAction
} from "../services/actions/wsUserOrdersAction";
import {TwsUserOrders} from '../types/wsUserOrders'
const wsFeedActions = createWSActions(wsOrdersFeedsErrAction, wsOrdersFeedsConnectingAction, WS_ORDERS_FEEDS_CONNECT, wsOrdersFeedsDisconnectingAction, wsOrdersFeedsGetMessageAction, WS_ORDERS_FEEDS_DISCONNECT)
const wsUserActions = createWSActions(wsOrdersUserErrAction, wsOrdersUserConnectingAction, TwsUserOrders.WS_ORDERS_USER_CONNECT, wsOrdersUserDisconnectingAction, wsOrdersUserGetMessageAction, TwsUserOrders.WS_ORDERS_USER_DISCONNECT)
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, socketMiddleware(wsFeedActions), socketMiddleware(wsUserActions))));
