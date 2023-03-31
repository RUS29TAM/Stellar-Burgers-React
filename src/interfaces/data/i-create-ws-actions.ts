import {
    TWsOrdersFeeds,
    TwsOrdersFeedsConnectingAction,
    TwsOrdersFeedsDisconnectingAction, TwsOrdersFeedsErrAction, TwsOrdersFeedsGetMessageAction
} from "../../types/t-ws-orders-feeds";
import {
    TwsOrdersUserConnectingAction, TwsOrdersUserDisconnectingAction,
    TwsOrdersUserErrAction,
    TwsOrdersUserGetMessageAction,
    TWsUserOrders
} from "../../types/t-ws-user-orders";

export interface ICreateWsActions {
    connectStartType: TWsOrdersFeeds.WS_ORDERS_FEEDS_CONNECT | TWsUserOrders.WS_ORDERS_USER_CONNECT,
    connectStopType: TWsOrdersFeeds.WS_ORDERS_FEEDS_DISCONNECT | TWsUserOrders.WS_ORDERS_USER_DISCONNECT,
    onOpenAction: TwsOrdersFeedsConnectingAction | TwsOrdersUserConnectingAction,
    onCloseAction: TwsOrdersFeedsDisconnectingAction | TwsOrdersUserDisconnectingAction,
    onErrorAction: TwsOrdersFeedsErrAction | TwsOrdersUserErrAction,
    onMassageAction: TwsOrdersFeedsGetMessageAction | TwsOrdersUserGetMessageAction,
}




