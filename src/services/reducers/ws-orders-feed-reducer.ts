import {TWsOrdersFeeds, TwsOrdersFeedsActions} from "../../types/t-ws-orders-feeds";
import {IwsOrdersFeedsReducer} from '../../interfaces/data/i-orders-feeds-reducer'

const initialState: IwsOrdersFeedsReducer = {
    orders: [],
    total: 0,
    totalToday: 0,
    openConnection: false,
    error: false,
    errorMessage: null,
}

export const wsOrdersFeedReducer = (state = initialState, action: TwsOrdersFeedsActions): IwsOrdersFeedsReducer => {
    switch (action.type) {

        case TWsOrdersFeeds.WS_ORDERS_FEEDS_CONNECTING:
            return {
                ...state,
                openConnection: true,
                error: false,
                errorMessage: null,
            }

        case TWsOrdersFeeds.WS_ORDERS_FEEDS_DISCONNECTING:
            return {
                ...state,
                openConnection: false,
                error: false,
                errorMessage: null,
            }

        case TWsOrdersFeeds.WS_ORDERS_FEEDS_ERR:
            return {
                ...state,
                openConnection: false,
                error: true,
                errorMessage: action.payload,
            }

        case TWsOrdersFeeds.WS_ORDERS_FEEDS_GET_MESSAGE:
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
