export const WS_ORDERS_FEEDS_CONNECT = 'WS_ORDERS_FEEDS_CONNECT'                 //соединять
export const WS_ORDERS_FEEDS_CONNECTING = 'WS_ORDERS_FEEDS_CONNECTING'           //соединяющий
export const WS_ORDERS_FEEDS_DISCONNECT = 'WS_ORDERS_FEEDS_DISCONNECT'           //разъединять
export const WS_ORDERS_FEEDS_DISCONNECTING = 'WS_ORDERS_FEEDS_DISCONNECTING'     //разъединенный
export const WS_ORDERS_FEEDS_ERR = 'WS_ORDERS_FEEDS_ERR'                         //err
export const WS_ORDERS_FEEDS_GET_MESSAGE = 'WS_ORDERS_FEEDS_GET_MESSAGE'         //получить сообщение

export const wsOrdersFeedsConnectAction = host => ({type: WS_ORDERS_FEEDS_CONNECT, host})
export const wsOrdersFeedsConnectingAction = host => ({type: WS_ORDERS_FEEDS_CONNECTING, host})
export const wsOrdersFeedDisconnectAction = () => ({type: WS_ORDERS_FEEDS_DISCONNECT})
export const wsOrdersFeedsDisconnectingAction = host => ({type: WS_ORDERS_FEEDS_DISCONNECTING, host})
export const wsOrdersFeedsErrAction = host => ({type: WS_ORDERS_FEEDS_ERR, host})
export const wsOrdersFeedsGetMessageAction = host => ({type: WS_ORDERS_FEEDS_GET_MESSAGE, host})

