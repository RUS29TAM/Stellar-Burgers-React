import {
    IwsOrdersUserConnectAction,
    IwsOrdersUserConnectingAction,
    IwsOrdersUserDisconnectAction,
    IwsOrdersUserDisconnectingAction,
    IwsOrdersUserErrAction,
    IwsOrdersUserGetMessageAction
} from "../interfaces/IwsUserOrders";

export enum TwsUserOrders {
    WS_ORDERS_USER_CONNECT = 'WS_ORDERS_FEEDS_CONNECT',                 //соединять
    WS_ORDERS_USER_CONNECTING = 'WS_ORDERS_FEEDS_CONNECTING',           //соединяющий
    WS_ORDERS_USER_DISCONNECT = 'WS_ORDERS_FEEDS_DISCONNECT',           //разъединять
    WS_ORDERS_USER_DISCONNECTING = 'WS_ORDERS_FEEDS_DISCONNECTING',     //разъединенный
    WS_ORDERS_USER_ERR = 'WS_ORDERS_FEEDS_ERR',                         //err
    WS_ORDERS_USER_GET_MESSAGE = 'WS_ORDERS_FEEDS_GET_MESSAGE',         //получить сообщение
}

export type wsUserOrdersActions =
    IwsOrdersUserConnectAction
    | IwsOrdersUserConnectingAction
    | IwsOrdersUserDisconnectAction
    | IwsOrdersUserDisconnectingAction
    | IwsOrdersUserErrAction
    | IwsOrdersUserGetMessageAction

export type TwsOrdersUserConnectAction = (url: string) => wsUserOrdersActions
export type TwsOrdersUserConnectingAction = (e: Event) => wsUserOrdersActions
export type TwsOrdersUserDisconnectAction = () => wsUserOrdersActions
export type TwsOrdersUserDisconnectingAction = (e: Event) => wsUserOrdersActions
export type TwsOrdersUserErrAction = (e: Event) => wsUserOrdersActions
export type TwsOrdersUserGetMessageAction = (data: object) => wsUserOrdersActions



