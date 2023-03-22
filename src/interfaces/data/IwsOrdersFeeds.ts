import {TwsOrdersFeeds} from "../../types/TwsOrdersFeeds";

export interface IwsOrdersFeedsConnectAction {
    type: TwsOrdersFeeds.WS_ORDERS_FEEDS_CONNECT
    payload: any
}

export interface IwsOrdersFeedsConnectingAction {
    type: TwsOrdersFeeds.WS_ORDERS_FEEDS_CONNECTING
    payload: any
}

export interface IwsOrdersFeedDisconnectAction {
    type: TwsOrdersFeeds.WS_ORDERS_FEEDS_DISCONNECT
}

export interface IwsOrdersFeedsDisconnectingAction {
    type: TwsOrdersFeeds.WS_ORDERS_FEEDS_DISCONNECTING
    payload: any
}

export interface IwsOrdersFeedsErrAction {
    type: TwsOrdersFeeds.WS_ORDERS_FEEDS_ERR
    payload: any
}

export interface IwsOrdersFeedsGetMessageAction {
    type: TwsOrdersFeeds.WS_ORDERS_FEEDS_GET_MESSAGE
    payload: any
}



