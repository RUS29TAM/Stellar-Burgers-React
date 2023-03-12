import {
    TwsOrdersUserConnectAction,
    TwsOrdersUserConnectingAction, TwsOrdersUserDisconnectAction,
    TwsOrdersUserDisconnectingAction, TwsOrdersUserErrAction, TwsOrdersUserGetMessageAction,
    TwsUserOrders
} from "../../types/wsUserOrders";

export const wsOrdersUserConnectAction: TwsOrdersUserConnectAction = (url: string) => ({type: TwsUserOrders.WS_ORDERS_USER_CONNECT, payload: url})
export const wsOrdersUserConnectingAction: TwsOrdersUserConnectingAction = (e) => ({type: TwsUserOrders.WS_ORDERS_USER_CONNECTING, payload: e})
export const wsOrdersUserDisconnectAction: TwsOrdersUserDisconnectAction = () => ({type: TwsUserOrders.WS_ORDERS_USER_DISCONNECT})
export const wsOrdersUserDisconnectingAction: TwsOrdersUserDisconnectingAction = (e) => ({type: TwsUserOrders.WS_ORDERS_USER_DISCONNECTING, payload: e})
export const wsOrdersUserErrAction: TwsOrdersUserErrAction = (e) => ({type: TwsUserOrders.WS_ORDERS_USER_ERR, payload: e})
export const wsOrdersUserGetMessageAction: TwsOrdersUserGetMessageAction = (data) => ({type: TwsUserOrders.WS_ORDERS_USER_GET_MESSAGE, payload: data})

