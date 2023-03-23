import {TwsOrdersFeedsActions,TWsOrdersFeeds,} from "../types/t-ws-orders-feeds";
import {TwsUserOrdersActions,TWsUserOrders,} from "../types/t-ws-user-orders";

export const createWsActions = (
    onErrorAction: { (e: Event): TwsOrdersFeedsActions; (e: Event): TwsUserOrdersActions; },
    onOpenAction: { (e: Event): TwsOrdersFeedsActions; (e: Event): TwsUserOrdersActions; },
    connectStartType: TWsOrdersFeeds | TWsUserOrders,
    onCloseAction: { (e: Event): TwsOrdersFeedsActions; (e: Event): TwsUserOrdersActions; },
    onMassageAction: { (data: object): TwsOrdersFeedsActions; (data: object): TwsUserOrdersActions; },
    connectStopType: TWsOrdersFeeds | TWsUserOrders) => ({
    onError: onErrorAction,
    connectStart: connectStartType,
    onClose: onCloseAction,
    onMassage: onMassageAction,
    connectStop: connectStopType,
    onOpen: onOpenAction,
})
