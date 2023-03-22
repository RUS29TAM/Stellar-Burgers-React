import {Middleware} from "redux";
import {ICreateWSActions} from "../interfaces/data/ICreateWSActions";

const socketMiddleware = (wsActions: ICreateWSActions):Middleware => store => {
    let socket: WebSocket | null = null
    return next => action => {
        const {dispatch} = store
        const {type, payload} = action

        if (type === wsActions.connectStartType) {
            socket = new WebSocket(payload)
        }

        if (socket) {
            socket.onopen = e => dispatch(wsActions.onOpenAction(e))
            socket.onclose = e => dispatch(wsActions.onCloseAction(e))
            socket.onerror = e => dispatch(wsActions.onErrorAction(e))
            socket.onmessage = e => dispatch(wsActions.onMassageAction(JSON.parse(e.data)))

            if (type === wsActions.connectStopType && socket.readyState === 1) {
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
