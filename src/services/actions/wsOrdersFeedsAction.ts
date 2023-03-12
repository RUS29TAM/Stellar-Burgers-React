import {
    TwsOrdersFeedDisconnectAction,
    TwsOrdersFeeds,
    TwsOrdersFeedsConnectAction,
    TwsOrdersFeedsConnectingAction,
    TwsOrdersFeedsDisconnectingAction,
    TwsOrdersFeedsErrAction,
    TwsOrdersFeedsGetMessageAction
} from "../../types/wsOrdersFeeds";

export const wsOrdersFeedsConnectAction: TwsOrdersFeedsConnectAction = (url: string) => ({type: TwsOrdersFeeds.WS_ORDERS_FEEDS_CONNECT, payload: url})
export const wsOrdersFeedsConnectingAction: TwsOrdersFeedsConnectingAction = (e: Event) => ({type: TwsOrdersFeeds.WS_ORDERS_FEEDS_CONNECTING, payload: e})
export const wsOrdersFeedDisconnectAction: TwsOrdersFeedDisconnectAction = () => ({type: TwsOrdersFeeds.WS_ORDERS_FEEDS_DISCONNECT})
export const wsOrdersFeedsDisconnectingAction: TwsOrdersFeedsDisconnectingAction = (e: Event) => ({type: TwsOrdersFeeds.WS_ORDERS_FEEDS_DISCONNECTING, payload: e})
export const wsOrdersFeedsErrAction: TwsOrdersFeedsErrAction = (e: Event) => ({type: TwsOrdersFeeds.WS_ORDERS_FEEDS_ERR, payload: e})
export const wsOrdersFeedsGetMessageAction: TwsOrdersFeedsGetMessageAction = (data: object) => ({type: TwsOrdersFeeds.WS_ORDERS_FEEDS_GET_MESSAGE, payload: data})

