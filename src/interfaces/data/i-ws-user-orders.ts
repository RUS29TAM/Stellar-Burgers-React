import {TWsUserOrders} from "../../types/t-ws-user-orders";

export interface IwsOrdersUserConnectAction {
    type: TWsUserOrders.WS_ORDERS_USER_CONNECT
    payload: any
}

export interface IwsOrdersUserConnectingAction {
    type: TWsUserOrders.WS_ORDERS_USER_CONNECTING
    payload: any
}

export interface IwsOrdersUserDisconnectAction {
    type: TWsUserOrders.WS_ORDERS_USER_DISCONNECT
}

export interface IwsOrdersUserDisconnectingAction {
    type: TWsUserOrders.WS_ORDERS_USER_DISCONNECTING
    payload: any
}

export interface IwsOrdersUserErrAction {
    type: TWsUserOrders.WS_ORDERS_USER_ERR
    payload: any
}

export interface IwsOrdersUserGetMessageAction {
    type: TWsUserOrders.WS_ORDERS_USER_GET_MESSAGE
    payload: any
}


