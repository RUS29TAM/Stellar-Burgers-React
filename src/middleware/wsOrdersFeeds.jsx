import {
  WS_ORDERS_FEEDS_CONNECT,
  WS_ORDERS_FEEDS_DISCONNECT,
  wsOrdersFeedsConnectingAction,
  wsOrdersFeedsConnectedAction,
  wsOrdersFeedsConnectAction,
  wsOrdersFeedDisconnectAction,
  wsOrdersFeedsDisconnectingAction,
  wsOrdersFeedsGetMessageAction,
} from '../services/actions/wsOrdersFeedsAction'

const wsOrdersFeeds = () => store => {
  let socket = null
  return subsequent => action => {
    const {dispatch} = store
    const {type, payload} = action

    if (type === WS_ORDERS_FEEDS_CONNECT) {
      socket = new WebSocket(payload)
    }

    if (socket) {
      socket.onopen = e => dispatch(wsOrdersFeedsConnectAction(e))
      socket.onclose = e => dispatch(wsOrdersFeedDisconnectAction(e))
      socket.onerror = e => dispatch(wsOrdersFeedsDisconnectingAction(e))
      socket.onmessage = e => dispatch(wsOrdersFeedsGetMessageAction(JSON.parse(e.data)))

      if (type === WS_ORDERS_FEEDS_DISCONNECT && socket.readyState === 1) {
        socket.close(1000, "работа закончена")
        socket = null
      }
    }
    subsequent(action)
  }
}

export default wsOrdersFeeds
/*
Чтобы получить состояние соединения, существует дополнительное свойство socket.readyState со значениями:
0 – «CONNECTING»: соединение ещё не установлено,
1 – «OPEN»: обмен данными,
2 – «CLOSING»: соединение закрывается,
3 – «CLOSED»: соединение закрыто.
 */
