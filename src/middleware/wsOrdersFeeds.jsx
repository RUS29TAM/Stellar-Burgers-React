import {
  WS_ORDERS_FEEDS_CONNECT,
  wsOrdersFeedsConnectingAction,
  WS_ORDERS_FEEDS_DISCONNECT,
  wsOrdersFeedsDisconnectingAction,
  wsOrdersFeedsErrAction,
  wsOrdersFeedsGetMessageAction,

} from '../services/actions/wsOrdersFeedsAction'

const wsOrdersFeeds = () => store => {
  let socket = null
  return next => action => {
    console.log('websocket open', store)
    const {dispatch} = store
    const {type, payload} = action

    if (type === WS_ORDERS_FEEDS_CONNECT) {
      socket = new WebSocket(payload)
    }

    if (socket) {
      socket.onopen = host => dispatch(wsOrdersFeedsConnectingAction(host))
      socket.onclose = host => dispatch(wsOrdersFeedsDisconnectingAction(host))
      socket.onerror = host => dispatch(wsOrdersFeedsErrAction(host))
      socket.onmessage = host => dispatch(wsOrdersFeedsGetMessageAction(JSON.parse(host.data)))

      if (type === WS_ORDERS_FEEDS_DISCONNECT && socket.readyState === 1) {
        socket.close(1000, "работа закончена по умолчанию - нормальное закрытие")
        socket = null
      } else if (type === WS_ORDERS_FEEDS_DISCONNECT && socket.readyState === 1) {
        socket.close(1006, "соединение было потеряно")
        socket = null
      } else if (type === WS_ORDERS_FEEDS_DISCONNECT && socket.readyState === 1) {
        socket.close(1001, "сервер выключен или пользователь покинул страницу")
        socket = null
      } else if (type === WS_ORDERS_FEEDS_DISCONNECT && socket.readyState === 1) {
        socket.close(10011, "сервер столкнулся с непредвиденным обстоятельством, которое помешало ему в выполнение запроса")
        socket = null
      }
    }
    next(action)
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
