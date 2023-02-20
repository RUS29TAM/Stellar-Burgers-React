import {
  WS_ORDERS_USER_ERR,
  WS_ORDERS_USER_GET_MESSAGE,
  WS_ORDERS_USER_DISCONNECTING,
  WS_ORDERS_USER_CONNECTING,
} from '../actions/wsUserOrdersAction'

const initialState = {
  openConnection: false,
  errorMessage: null,
  error: false,
  orders: [],
}


export const wsUserOrderReducer = (state = initialState, action) => {
  switch (action.type) {

    case WS_ORDERS_USER_CONNECTING:
      return {
        ...state,
        openConnection: true,
        error: false,
        errorMessage: null,
      }

    case WS_ORDERS_USER_ERR:
      return {
        ...state,
        openConnection: false,
        error: true,
        errorMessage: action.payload,
      }

    case WS_ORDERS_USER_DISCONNECTING:
      return {
        ...state,
        openConnection: false,
        error: false,
        errorMessage: null,
      }

    case WS_ORDERS_USER_GET_MESSAGE:
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
