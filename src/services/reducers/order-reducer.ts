import {IOrderReducer} from "../../interfaces/api/i-order-reducer";
import {TOrder, TOrderActions} from "../../types/t-order";

const initialState: IOrderReducer = {
    currentOrderContent: [],
    loading: false,
    error: false,
    createdOrders: null,
    errorMessage: null,
};

export const orderReducer = (state = initialState, action: TOrderActions): IOrderReducer => {
    switch (action.type) {
        case TOrder.UPDATE_CURRENT_ORDER_CONTENT:
            return {...state, currentOrderContent: action.payload};
        case TOrder.CREATE_ORDER_REQUEST:
            return {...state, loading: true};
        case TOrder.CREATE_ORDER_SUCCESS:
            const {name, order} = action.payload;
            return {...state, loading: false, currentOrderContent: [], createdOrders: {name: name, number: order.number}};
        case TOrder.RESET_CONSTRUCTOR:
            return {...state};
        case TOrder.CREATE_ORDER_FAIL:
            return {...state, loading: false, error: true, errorMessage: action.payload};
        default:
            return state;
    }
};
