import {
    TwsOrdersFeeds,
    TwsOrdersFeedsConnectingAction,
    TwsOrdersFeedsDisconnectingAction, TwsOrdersFeedsErrAction, TwsOrdersFeedsGetMessageAction
} from "../types/TwsOrdersFeeds";
import {
    TwsOrdersUserConnectingAction, TwsOrdersUserDisconnectingAction,
    TwsOrdersUserErrAction,
    TwsOrdersUserGetMessageAction,
    TwsUserOrders
} from "../types/TwsUserOrders";

export interface ICreateWSActions {
    connectStartType: TwsOrdersFeeds.WS_ORDERS_FEEDS_CONNECT | TwsUserOrders.WS_ORDERS_USER_CONNECT,
    connectStopType: TwsOrdersFeeds.WS_ORDERS_FEEDS_DISCONNECT | TwsUserOrders.WS_ORDERS_USER_DISCONNECT,
    onOpenAction: TwsOrdersFeedsConnectingAction | TwsOrdersUserConnectingAction,
    onCloseAction: TwsOrdersFeedsDisconnectingAction | TwsOrdersUserDisconnectingAction,
    onErrorAction: TwsOrdersFeedsErrAction | TwsOrdersUserErrAction,
    onMassageAction: TwsOrdersFeedsGetMessageAction | TwsOrdersUserGetMessageAction,
}




