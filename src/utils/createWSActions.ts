import {wsOrdersFeedsActions,TwsOrdersFeeds,} from "../types/wsOrdersFeeds";
import {wsUserOrdersActions,TwsUserOrders,} from "../types/wsUserOrders";

export const createWSActions = (
    onErrorAction: { (e: Event): wsOrdersFeedsActions; (e: Event): wsUserOrdersActions; },
    onOpenAction: { (e: Event): wsOrdersFeedsActions; (e: Event): wsUserOrdersActions; },
    connectStartType: TwsOrdersFeeds | TwsUserOrders,
    onCloseAction: { (e: Event): wsOrdersFeedsActions; (e: Event): wsUserOrdersActions; },
    onMassageAction: { (data: object): wsOrdersFeedsActions; (data: object): wsUserOrdersActions; },
    connectStopType: TwsOrdersFeeds | TwsUserOrders) => ({
    onError: onErrorAction,
    connectStart: connectStartType,
    onClose: onCloseAction,
    onMassage: onMassageAction,
    connectStop: connectStopType,
    onOpen: onOpenAction,
})
