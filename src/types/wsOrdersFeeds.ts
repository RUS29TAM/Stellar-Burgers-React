import {
    IwsOrdersFeedsConnectAction,
    IwsOrdersFeedsConnectingAction,
    IwsOrdersFeedDisconnectAction,
    IwsOrdersFeedsDisconnectingAction,
    IwsOrdersFeedsErrAction,
    IwsOrdersFeedsGetMessageAction
} from "../interfaces/wsOrdersFeeds";

export enum TwsOrdersFeeds {
    WS_ORDERS_FEEDS_CONNECT = 'WS_ORDERS_FEEDS_CONNECT',                 //соединять
    WS_ORDERS_FEEDS_CONNECTING = 'WS_ORDERS_FEEDS_CONNECTING',           //соединяющий
    WS_ORDERS_FEEDS_DISCONNECT = 'WS_ORDERS_FEEDS_DISCONNECT',           //разъединять
    WS_ORDERS_FEEDS_DISCONNECTING = 'WS_ORDERS_FEEDS_DISCONNECTING',     //разъединенный
    WS_ORDERS_FEEDS_ERR = 'WS_ORDERS_FEEDS_ERR',                         //err
    WS_ORDERS_FEEDS_GET_MESSAGE = 'WS_ORDERS_FEEDS_GET_MESSAGE',         //получить сообщение
}

export type wsOrdersFeedsActions =
    IwsOrdersFeedsConnectAction
    | IwsOrdersFeedsConnectingAction
    | IwsOrdersFeedDisconnectAction
    | IwsOrdersFeedsDisconnectingAction
    | IwsOrdersFeedsErrAction
    | IwsOrdersFeedsGetMessageAction

export type TwsOrdersFeedsConnectAction = (url: string) => wsOrdersFeedsActions
export type TwsOrdersFeedsConnectingAction = (e: Event) => wsOrdersFeedsActions
export type TwsOrdersFeedDisconnectAction = () => wsOrdersFeedsActions
export type TwsOrdersFeedsDisconnectingAction = (e: Event) => wsOrdersFeedsActions
export type TwsOrdersFeedsErrAction = (e: Event) => wsOrdersFeedsActions
export type TwsOrdersFeedsGetMessageAction = (data: object) => wsOrdersFeedsActions



