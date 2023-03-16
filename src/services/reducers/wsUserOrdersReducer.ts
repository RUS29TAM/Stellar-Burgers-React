import {TwsUserOrders, TwsUserOrdersActions} from "../../types/TwsUserOrders";
import {IwsUserOrdersReducer} from '../../interfaces/IUserOrdersReducer'

const initialState: IwsUserOrdersReducer = {
    orders: [],
    openConnection: false,
    error: false,
    errorMessage: null,
}

export const wsUserOrderReducer = (state = initialState, action: TwsUserOrdersActions): IwsUserOrdersReducer => {
    switch (action.type) {

        case TwsUserOrders.WS_ORDERS_USER_CONNECTING:
            return {
                ...state,
                openConnection: true,
                error: false,
                errorMessage: null,
            }

        case TwsUserOrders.WS_ORDERS_USER_DISCONNECTING:
            return {
                ...state,
                openConnection: false,
                error: false,
                errorMessage: null,
            }

        case TwsUserOrders.WS_ORDERS_USER_ERR:
            return {
                ...state,
                openConnection: false,
                error: true,
                errorMessage: action.payload,
            }

        case TwsUserOrders.WS_ORDERS_USER_GET_MESSAGE:
            return {
                openConnection: true,
                error: false,
                errorMessage: null,
                orders: action.payload.orders.reverse(),
            }

        default:
            return state
    }
}
