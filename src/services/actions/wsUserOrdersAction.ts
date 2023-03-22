import {
    TwsOrdersUserConnectAction,
    TwsOrdersUserConnectingAction, TwsOrdersUserDisconnectAction,
    TwsOrdersUserDisconnectingAction, TwsOrdersUserErrAction, TwsOrdersUserGetMessageAction,
    TwsUserOrders
} from "../../types/TwsUserOrders";
import {ICreateWSActions} from "../../interfaces/data/ICreateWSActions";

export const wsOrdersUserConnectAction: TwsOrdersUserConnectAction = (url: string) => ({type: TwsUserOrders.WS_ORDERS_USER_CONNECT, payload: url})
export const wsOrdersUserConnectingAction: TwsOrdersUserConnectingAction = (e: Event) => ({type: TwsUserOrders.WS_ORDERS_USER_CONNECTING, payload: e})
export const wsOrdersUserDisconnectAction: TwsOrdersUserDisconnectAction = () => ({type: TwsUserOrders.WS_ORDERS_USER_DISCONNECT})
export const wsOrdersUserDisconnectingAction: TwsOrdersUserDisconnectingAction = (e: Event) => ({type: TwsUserOrders.WS_ORDERS_USER_DISCONNECTING, payload: e})
export const wsOrdersUserErrAction: TwsOrdersUserErrAction = (e: Event) => ({type: TwsUserOrders.WS_ORDERS_USER_ERR, payload: e})
export const wsOrdersUserGetMessageAction: TwsOrdersUserGetMessageAction = (data: object) => ({type: TwsUserOrders.WS_ORDERS_USER_GET_MESSAGE, payload: data})

export const wsUserActions: ICreateWSActions = {
    connectStartType: TwsUserOrders.WS_ORDERS_USER_CONNECT,
    connectStopType: TwsUserOrders.WS_ORDERS_USER_DISCONNECT,
    onOpenAction: wsOrdersUserConnectingAction,
    onCloseAction: wsOrdersUserDisconnectingAction,
    onErrorAction: wsOrdersUserErrAction,
    onMassageAction:wsOrdersUserGetMessageAction,
}
