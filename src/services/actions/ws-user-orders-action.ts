import {
    TwsOrdersUserConnectAction,
    TwsOrdersUserConnectingAction, TwsOrdersUserDisconnectAction,
    TwsOrdersUserDisconnectingAction, TwsOrdersUserErrAction, TwsOrdersUserGetMessageAction,
    TWsUserOrders
} from "../../types/t-ws-user-orders";
import {ICreateWsActions} from "../../interfaces/data/i-create-ws-actions";

export const wsOrdersUserConnectAction: TwsOrdersUserConnectAction = (url: string) => ({type: TWsUserOrders.WS_ORDERS_USER_CONNECT, payload: url})
export const wsOrdersUserConnectingAction: TwsOrdersUserConnectingAction = (e: Event) => ({type: TWsUserOrders.WS_ORDERS_USER_CONNECTING, payload: e})
export const wsOrdersUserDisconnectAction: TwsOrdersUserDisconnectAction = () => ({type: TWsUserOrders.WS_ORDERS_USER_DISCONNECT})
export const wsOrdersUserDisconnectingAction: TwsOrdersUserDisconnectingAction = (e: Event) => ({type: TWsUserOrders.WS_ORDERS_USER_DISCONNECTING, payload: e})
export const wsOrdersUserErrAction: TwsOrdersUserErrAction = (e: Event) => ({type: TWsUserOrders.WS_ORDERS_USER_ERR, payload: e})
export const wsOrdersUserGetMessageAction: TwsOrdersUserGetMessageAction = (data: object) => ({type: TWsUserOrders.WS_ORDERS_USER_GET_MESSAGE, payload: data})

export const wsUserActions: ICreateWsActions = {
    connectStartType: TWsUserOrders.WS_ORDERS_USER_CONNECT,
    connectStopType: TWsUserOrders.WS_ORDERS_USER_DISCONNECT,
    onOpenAction: wsOrdersUserConnectingAction,
    onCloseAction: wsOrdersUserDisconnectingAction,
    onErrorAction: wsOrdersUserErrAction,
    onMassageAction:wsOrdersUserGetMessageAction,
}
