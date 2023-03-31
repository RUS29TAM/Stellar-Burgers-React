import {
    TwsOrdersFeedDisconnectAction,
    TWsOrdersFeeds,
    TwsOrdersFeedsConnectAction,
    TwsOrdersFeedsConnectingAction,
    TwsOrdersFeedsDisconnectingAction,
    TwsOrdersFeedsErrAction,
    TwsOrdersFeedsGetMessageAction
} from "../../types/t-ws-orders-feeds";
import {ICreateWsActions} from "../../interfaces/data/i-create-ws-actions";

export const wsOrdersFeedsConnectAction: TwsOrdersFeedsConnectAction = (url: string) => ({type: TWsOrdersFeeds.WS_ORDERS_FEEDS_CONNECT, payload: url})
export const wsOrdersFeedsConnectingAction: TwsOrdersFeedsConnectingAction = (e: Event) => ({type: TWsOrdersFeeds.WS_ORDERS_FEEDS_CONNECTING, payload: e})
export const wsOrdersFeedDisconnectAction: TwsOrdersFeedDisconnectAction = () => ({type: TWsOrdersFeeds.WS_ORDERS_FEEDS_DISCONNECT})
export const wsOrdersFeedsDisconnectingAction: TwsOrdersFeedsDisconnectingAction = (e: Event) => ({type: TWsOrdersFeeds.WS_ORDERS_FEEDS_DISCONNECTING, payload: e})
export const wsOrdersFeedsErrAction: TwsOrdersFeedsErrAction = (e: Event) => ({type: TWsOrdersFeeds.WS_ORDERS_FEEDS_ERR, payload: e})
export const wsOrdersFeedsGetMessageAction: TwsOrdersFeedsGetMessageAction = (data: object) => ({type: TWsOrdersFeeds.WS_ORDERS_FEEDS_GET_MESSAGE, payload: data})

export const wsFeedActions: ICreateWsActions = {
    connectStartType: TWsOrdersFeeds.WS_ORDERS_FEEDS_CONNECT,
    connectStopType: TWsOrdersFeeds.WS_ORDERS_FEEDS_DISCONNECT,
    onOpenAction: wsOrdersFeedsConnectingAction,
    onCloseAction: wsOrdersFeedsDisconnectingAction,
    onErrorAction: wsOrdersFeedsErrAction,
    onMassageAction: wsOrdersFeedsGetMessageAction,
}
