import {
    UPDATE_CURRENT_ORDER_CONTENT,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    OPEN_ORDER_DETAILS_MODAL,
    CREATE_ORDER_FAIL,
} from '../actions/orderAction';

const initialState = {
    currentOrderContent: [],
    loading: false,
    error: false,
    createdOrders: null,
    isOrderDetailsModalOpen: false,
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_ORDER_CONTENT:
            return {...state, currentOrderContent: action.payload};
        case CREATE_ORDER_REQUEST:
            return {...state, loading: true};
        case CREATE_ORDER_SUCCESS:
            const {name, order} = action.payload;
            return {
                ...state,
                loading: false,
                currentOrderContent: [],
                createdOrders: {name: name, number: order.number},
            };
        case OPEN_ORDER_DETAILS_MODAL:
            return {...state, isOrderDetailsModalOpen: true};
        case CREATE_ORDER_FAIL:
            return {...state, loading: false, error: true};
        default:
            return state;
    }
};
