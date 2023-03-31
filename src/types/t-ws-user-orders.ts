import {
    IwsOrdersUserConnectAction,
    IwsOrdersUserConnectingAction,
    IwsOrdersUserDisconnectAction,
    IwsOrdersUserDisconnectingAction,
    IwsOrdersUserErrAction,
    IwsOrdersUserGetMessageAction
} from "../interfaces/data/i-ws-user-orders";

export enum TWsUserOrders {
    WS_ORDERS_USER_CONNECT = 'WS_ORDERS_FEEDS_CONNECT',                 //соединять
    WS_ORDERS_USER_CONNECTING = 'WS_ORDERS_FEEDS_CONNECTING',           //соединяющий
    WS_ORDERS_USER_DISCONNECT = 'WS_ORDERS_FEEDS_DISCONNECT',           //разъединять
    WS_ORDERS_USER_DISCONNECTING = 'WS_ORDERS_FEEDS_DISCONNECTING',     //разъединенный
    WS_ORDERS_USER_ERR = 'WS_ORDERS_FEEDS_ERR',                         //err
    WS_ORDERS_USER_GET_MESSAGE = 'WS_ORDERS_FEEDS_GET_MESSAGE',         //получить сообщение
}

export type TwsUserOrdersActions =
    IwsOrdersUserConnectAction
    | IwsOrdersUserConnectingAction
    | IwsOrdersUserDisconnectAction
    | IwsOrdersUserDisconnectingAction
    | IwsOrdersUserErrAction
    | IwsOrdersUserGetMessageAction

export type TwsOrdersUserConnectAction = (url: string) => IwsOrdersUserConnectAction
export type TwsOrdersUserConnectingAction = (e: Event) => IwsOrdersUserConnectingAction
export type TwsOrdersUserDisconnectAction = () => IwsOrdersUserDisconnectAction
export type TwsOrdersUserDisconnectingAction = (e: Event) => IwsOrdersUserDisconnectingAction
export type TwsOrdersUserErrAction = (e: Event) => IwsOrdersUserErrAction
export type TwsOrdersUserGetMessageAction = (data: object) => IwsOrdersUserGetMessageAction



