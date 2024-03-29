import api from '../../api/api'
import {TOrder, TOrderActions} from "../../types/t-order";

export const updateCurrentOrderContent = (payload: any[]):TOrderActions => ({type: TOrder.UPDATE_CURRENT_ORDER_CONTENT, payload,});

export const createOrder = (ingredientsID: string[], token: string): (dispatch: any) => void => (dispatch) => {
    dispatch({type: TOrder.CREATE_ORDER_REQUEST});
    api.createOrder(ingredientsID, token)
        .then((json) => {
            dispatch({type: TOrder.CREATE_ORDER_SUCCESS, payload: json});
            dispatch({type: TOrder.RESET_CONSTRUCTOR});
        })
        .catch(() => dispatch({type: TOrder.CREATE_ORDER_FAIL}));
};
