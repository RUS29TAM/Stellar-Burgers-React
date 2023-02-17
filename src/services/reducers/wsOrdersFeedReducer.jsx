import {
  WS_ORDERS_FEEDS_CONNECTING,
  WS_ORDERS_FEEDS_GET_MESSAGE,
  WS_ORDERS_FEEDS_DISCONNECTING,
  WS_ORDERS_FEEDS_ERR
} from "../actions/wsOrdersFeedsAction";

const initialState = {
  openConnection: false,
  error: false,
  errorMessage: null,
  orders: [],
  total: 0,
  totalToday: 0,
}

export const wsOrdersFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_ORDERS_FEEDS_CONNECTING:
      return {
        ...state, openConnection: true, error: false, errorMessage: null,
      }
    case WS_ORDERS_FEEDS_ERR:
      return {
        ...state, openConnection: false, error: true, errorMessage: action.payload,
      }
    case WS_ORDERS_FEEDS_DISCONNECTING:
      return {
        ...state, openConnection: false, error: false, errorMessage: null,
      }
    case WS_ORDERS_FEEDS_GET_MESSAGE:
      return {
        ...state, openConnection: true, error: false, errorMessage: null, orders: action.payload.orders, total: action.payload.total, totalToday: action.payload.totalToday,
      }
  }
}
