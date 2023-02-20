export const WS_ORDERS_USER_CONNECT = 'WS_ORDERS_FEEDS_CONNECT'                 //соединять
export const WS_ORDERS_USER_CONNECTING = 'WS_ORDERS_FEEDS_CONNECTING'           //соединяющий
export const WS_ORDERS_USER_DISCONNECT = 'WS_ORDERS_FEEDS_DISCONNECT'           //разъединять
export const WS_ORDERS_USER_DISCONNECTING = 'WS_ORDERS_FEEDS_DISCONNECTING'     //разъединенный
export const WS_ORDERS_USER_ERR = 'WS_ORDERS_FEEDS_ERR'                         //err
export const WS_ORDERS_USER_GET_MESSAGE = 'WS_ORDERS_FEEDS_GET_MESSAGE'         //получить сообщение

export const wsOrdersUserConnectAction = url => ({type: WS_ORDERS_USER_CONNECT, payload: url})
export const wsOrdersUserConnectingAction = e => ({type: WS_ORDERS_USER_CONNECTING, payload: e})
export const wsOrdersUserDisconnectAction = () => ({type: WS_ORDERS_USER_DISCONNECT})
export const wsOrdersUserDisconnectingAction = e => ({type: WS_ORDERS_USER_DISCONNECTING, payload: e})
export const wsOrdersUserErrAction = e => ({type: WS_ORDERS_USER_ERR, payload: e})
export const wsOrdersUserGetMessageAction = data => ({type: WS_ORDERS_USER_GET_MESSAGE, payload: data})

