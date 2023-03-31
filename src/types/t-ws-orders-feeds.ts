import {
    IwsOrdersFeedsConnectAction,
    IwsOrdersFeedsConnectingAction,
    IwsOrdersFeedDisconnectAction,
    IwsOrdersFeedsDisconnectingAction,
    IwsOrdersFeedsErrAction,
    IwsOrdersFeedsGetMessageAction
} from "../interfaces/data/i-ws-orders-feeds";

export enum TWsOrdersFeeds {
    WS_ORDERS_FEEDS_CONNECT = 'WS_ORDERS_FEEDS_CONNECT',                 //соединять
    WS_ORDERS_FEEDS_CONNECTING = 'WS_ORDERS_FEEDS_CONNECTING',           //соединяющий
    WS_ORDERS_FEEDS_DISCONNECT = 'WS_ORDERS_FEEDS_DISCONNECT',           //разъединять
    WS_ORDERS_FEEDS_DISCONNECTING = 'WS_ORDERS_FEEDS_DISCONNECTING',     //разъединенный
    WS_ORDERS_FEEDS_ERR = 'WS_ORDERS_FEEDS_ERR',                         //err
    WS_ORDERS_FEEDS_GET_MESSAGE = 'WS_ORDERS_FEEDS_GET_MESSAGE',         //получить сообщение
}

export type TwsOrdersFeedsActions =
    IwsOrdersFeedsConnectAction
    | IwsOrdersFeedsConnectingAction
    | IwsOrdersFeedDisconnectAction
    | IwsOrdersFeedsDisconnectingAction
    | IwsOrdersFeedsErrAction
    | IwsOrdersFeedsGetMessageAction

export type TwsOrdersFeedsConnectAction = (url: string) => IwsOrdersFeedsConnectAction
export type TwsOrdersFeedsConnectingAction = (e: Event) => IwsOrdersFeedsConnectingAction
export type TwsOrdersFeedDisconnectAction = () => IwsOrdersFeedDisconnectAction
export type TwsOrdersFeedsDisconnectingAction = (e: Event) => IwsOrdersFeedsDisconnectingAction
export type TwsOrdersFeedsErrAction = (e: Event) => IwsOrdersFeedsErrAction
export type TwsOrdersFeedsGetMessageAction = (data: object) => IwsOrdersFeedsGetMessageAction



