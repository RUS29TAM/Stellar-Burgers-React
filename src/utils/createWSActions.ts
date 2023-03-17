import {TwsOrdersFeedsActions,TwsOrdersFeeds,} from "../types/TwsOrdersFeeds";
import {TwsUserOrdersActions,TwsUserOrders,} from "../types/TwsUserOrders";

export const createWSActions = (
    onErrorAction: { (e: Event): TwsOrdersFeedsActions; (e: Event): TwsUserOrdersActions; },
    onOpenAction: { (e: Event): TwsOrdersFeedsActions; (e: Event): TwsUserOrdersActions; },
    connectStartType: TwsOrdersFeeds | TwsUserOrders,
    onCloseAction: { (e: Event): TwsOrdersFeedsActions; (e: Event): TwsUserOrdersActions; },
    onMassageAction: { (data: object): TwsOrdersFeedsActions; (data: object): TwsUserOrdersActions; },
    connectStopType: TwsOrdersFeeds | TwsUserOrders) => ({
    onError: onErrorAction,
    connectStart: connectStartType,
    onClose: onCloseAction,
    onMassage: onMassageAction,
    connectStop: connectStopType,
    onOpen: onOpenAction,
})
