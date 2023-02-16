export const WS_ORDERS_FEEDS_CONNECT = 'WS_ORDERS_FEEDS_CONNECT'                 //соединять
export const WS_ORDERS_FEEDS_CONNECTING = 'WS_ORDERS_FEEDS_CONNECTING'           //связывающий
export const WS_ORDERS_FEEDS_CONNECTED = 'WS_ORDERS_FEEDS_CONNECTED'             //связанный
export const WS_ORDERS_FEEDS_DISCONNECT = 'WS_ORDERS_FEEDS_DISCONNECT'           //разъединять
export const WS_ORDERS_FEEDS_DISCONNECTING = 'WS_ORDERS_FEEDS_DISCONNECTING'     //разъединенный
export const WS_ORDERS_FEEDS_GET_MESSAGE = 'WS_ORDERS_FEEDS_GET_MESSAGE'         //получить сообщение

export const wsOrdersFeedsConnectAction = url => ({type: WS_ORDERS_FEEDS_CONNECT, payload: url})
export const wsOrdersFeedsConnectingAction = e => ({type: WS_ORDERS_FEEDS_CONNECTING, payload: e})
export const wsOrdersFeedsConnectedAction = e => ({type: WS_ORDERS_FEEDS_CONNECTED, payload: e})

export const wsOrdersFeedDisconnectAction = () => ({type: WS_ORDERS_FEEDS_DISCONNECT})
export const wsOrdersFeedsDisconnectingAction = e => ({type: WS_ORDERS_FEEDS_DISCONNECTING, payload: e})
export const wsOrdersFeedsGetMessageAction = data => ({type: WS_ORDERS_FEEDS_GET_MESSAGE, payload: data})

