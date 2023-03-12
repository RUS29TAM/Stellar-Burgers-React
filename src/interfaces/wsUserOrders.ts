import {TwsUserOrders} from "../types/wsUserOrders";

export interface IwsOrdersUserConnectAction {
    type: TwsUserOrders.WS_ORDERS_USER_CONNECT
    payload: any
}

export interface IwsOrdersUserConnectingAction {
    type: TwsUserOrders.WS_ORDERS_USER_CONNECTING
    payload: any
}

export interface IwsOrdersUserDisconnectAction {
    type: TwsUserOrders.WS_ORDERS_USER_DISCONNECT
}

export interface IwsOrdersUserDisconnectingAction {
    type: TwsUserOrders.WS_ORDERS_USER_DISCONNECTING
    payload: any
}

export interface IwsOrdersUserErrAction {
    type: TwsUserOrders.WS_ORDERS_USER_ERR
    payload: any
}

export interface IwsOrdersUserGetMessageAction {
    type: TwsUserOrders.WS_ORDERS_USER_GET_MESSAGE
    payload: any
}


