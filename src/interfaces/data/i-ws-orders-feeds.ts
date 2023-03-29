import {TWsOrdersFeeds} from "../../types/t-ws-orders-feeds";

export interface IwsOrdersFeedsConnectAction {
    type: TWsOrdersFeeds.WS_ORDERS_FEEDS_CONNECT
    payload: string
}

export interface IwsOrdersFeedsConnectingAction {
    type: TWsOrdersFeeds.WS_ORDERS_FEEDS_CONNECTING
    payload: any
}

export interface IwsOrdersFeedDisconnectAction {
    type: TWsOrdersFeeds.WS_ORDERS_FEEDS_DISCONNECT
}

export interface IwsOrdersFeedsDisconnectingAction {
    type: TWsOrdersFeeds.WS_ORDERS_FEEDS_DISCONNECTING
    payload: any
}

export interface IwsOrdersFeedsErrAction {
    type: TWsOrdersFeeds.WS_ORDERS_FEEDS_ERR
    payload: any
}

export interface IwsOrdersFeedsGetMessageAction {
    type: TWsOrdersFeeds.WS_ORDERS_FEEDS_GET_MESSAGE
    payload: any
}



