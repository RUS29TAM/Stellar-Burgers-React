const socketMiddleware = (wsActions) => store => {
    let socket = null
    return next => action => {
        const {dispatch} = store
        const {type, payload} = action

        if (type === wsActions.connectStart) {
            socket = new WebSocket(payload)
        }

        if (socket) {
            socket.onopen = e => dispatch(wsActions.onOpen(e))
            socket.onclose = e => dispatch(wsActions.onClose(e))
            socket.onerror = e => dispatch(wsActions.onError(e))
            socket.onmessage = e => dispatch(wsActions.onMassage(JSON.parse(e.data)))

            if (type === wsActions.connectStop && socket.readyState === 1) {
                socket.close(1000, "работа закончена по умолчанию - нормальное закрытие")
                socket = null
            }
        }
        next(action)
    }
}

export default socketMiddleware


/*
Чтобы получить состояние соединения, существует дополнительное свойство socket.readyState со значениями:
0 – «CONNECTING»: соединение ещё не установлено,
1 – «OPEN»: обмен данными,
2 – «CLOSING»: соединение закрывается,
3 – «CLOSED»: соединение закрыто.
 */
