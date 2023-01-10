import {
  UPDATE_CURRENT_ORDER_CONTENT,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  OPEN_ORDER_DETAILS_MODAL,
  CREATE_ORDER_FAIL,
  CLOSE_ORDER_DETAILS_MODAL,
} from '../actions/order';

const initialState = {
  currentOrderContent: [],
  isLoading: false,
  isError: false,
  createdOrders: [],
  isOrderDetailsModalOpen: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_ORDER_CONTENT:
      return { ...state, currentOrderContent: action.payload };
    case CREATE_ORDER_REQUEST:
      return { ...state, isLoading: true };
    case CREATE_ORDER_SUCCESS:
      const { name, order } = action.payload;
      return {
        ...state,
        isLoading: false,
        currentOrderContent: [],
        createdOrders: [...state.createdOrders, { name: name, number: order.number }],
      };
    case OPEN_ORDER_DETAILS_MODAL:
      return { ...state, isOrderDetailsModalOpen: true };
    case CLOSE_ORDER_DETAILS_MODAL:
      return { ...state, isOrderDetailsModalOpen: false };
    case CREATE_ORDER_FAIL:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
