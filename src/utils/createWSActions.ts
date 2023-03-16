import {wsOrdersFeedsActions,TwsOrdersFeeds,} from "../types/TwsOrdersFeeds";
import {TwsUserOrdersActions,TwsUserOrders,} from "../types/TwsUserOrders";

export const createWSActions = (
    onErrorAction: { (e: Event): wsOrdersFeedsActions; (e: Event): TwsUserOrdersActions; },
    onOpenAction: { (e: Event): wsOrdersFeedsActions; (e: Event): TwsUserOrdersActions; },
    connectStartType: TwsOrdersFeeds | TwsUserOrders,
    onCloseAction: { (e: Event): wsOrdersFeedsActions; (e: Event): TwsUserOrdersActions; },
    onMassageAction: { (data: object): wsOrdersFeedsActions; (data: object): TwsUserOrdersActions; },
    connectStopType: TwsOrdersFeeds | TwsUserOrders) => ({
    onError: onErrorAction,
    connectStart: connectStartType,
    onClose: onCloseAction,
    onMassage: onMassageAction,
    connectStop: connectStopType,
    onOpen: onOpenAction,
})
