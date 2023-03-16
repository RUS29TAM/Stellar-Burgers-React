import {TwsOrdersFeeds, wsOrdersFeedsActions} from "../../types/TwsOrdersFeeds";
import {IwsOrdersFeedsReducer} from '../../interfaces/IOrdersFeedsReducer'

const initialState: IwsOrdersFeedsReducer = {
    orders: [],
    total: 0,
    totalToday: 0,
    openConnection: false,
    error: false,
    errorMessage: null,
}

export const wsOrdersFeedReducer = (state = initialState, action: wsOrdersFeedsActions): IwsOrdersFeedsReducer => {
    switch (action.type) {

        case TwsOrdersFeeds.WS_ORDERS_FEEDS_CONNECTING:
            return {
                ...state,
                openConnection: true,
                error: false,
                errorMessage: null,
            }

        case TwsOrdersFeeds.WS_ORDERS_FEEDS_DISCONNECTING:
            return {
                ...state,
                openConnection: false,
                error: false,
                errorMessage: null,
            }

        case TwsOrdersFeeds.WS_ORDERS_FEEDS_ERR:
            return {
                ...state,
                openConnection: false,
                error: true,
                errorMessage: action.payload,
            }

        case TwsOrdersFeeds.WS_ORDERS_FEEDS_GET_MESSAGE:
            return {
                ...state,
                openConnection: true,
                error: false,
                errorMessage: null,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            }

        default:
            return state
    }
}
