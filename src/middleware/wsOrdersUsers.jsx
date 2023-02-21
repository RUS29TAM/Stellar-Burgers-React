import {
  WS_ORDERS_USER_CONNECT,
  WS_ORDERS_USER_DISCONNECT,
  wsOrdersUserConnectingAction,
  wsOrdersUserDisconnectingAction,
  wsOrdersUserErrAction,
  wsOrdersUserGetMessageAction,
} from '../services/actions/wsUserOrdersAction'


const wsOrdersUsers = () => store => {
  let socket = null;
  return next => action => {
    const {dispatch} = store
    const {type, payload} = action

    if (type === WS_ORDERS_USER_CONNECT) {
      socket = new WebSocket(payload)
    }

    if (socket) {

      socket.onopen = e => dispatch(wsOrdersUserConnectingAction(e))
      socket.onclose = e => dispatch(wsOrdersUserDisconnectingAction(e))
      socket.onerror = e => dispatch(wsOrdersUserErrAction(e))
      socket.onmessage = e => dispatch(wsOrdersUserGetMessageAction(JSON.parse(e.data)))

      if (type === WS_ORDERS_USER_DISCONNECT && socket.readyState === 1) {
        socket.close(1000, "работа закончена по умолчанию - нормальное закрытие")
        socket = null
      } else if (type === WS_ORDERS_USER_DISCONNECT && socket.readyState === 1) {
        socket.close(1006, "соединение было потеряно")
        socket = null
      } else if (type === WS_ORDERS_USER_DISCONNECT && socket.readyState === 1) {
        socket.close(1001, "сервер выключен или пользователь покинул страницу")
        socket = null
      } else if (type === WS_ORDERS_USER_DISCONNECT && socket.readyState === 1) {
        socket.close(10011, "сервер столкнулся с непредвиденным обстоятельством, которое помешало ему в выполнение запроса")
        socket = null
      }
    }
    next(action)
  }
}

export default wsOrdersUsers
