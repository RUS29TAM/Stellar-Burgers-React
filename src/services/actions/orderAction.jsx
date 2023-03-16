import api from '../../Api/Api'
import {TBurgerConstructor} from '../../types/TBurgerConstructor'

export const UPDATE_CURRENT_ORDER_CONTENT = 'UPDATE_CURRENT_ORDER_CONTENT';
export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_FAIL = 'CREATE_ORDER_FAIL';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const OPEN_ORDER_DETAILS_MODAL = 'OPEN_ORDER_DETAILS_MODAL';

export const updateCurrentOrderContent = (payload) => ({
    type: UPDATE_CURRENT_ORDER_CONTENT,
    payload,
});

export const createOrder = (ingredientsID, token) => (dispatch) => {
    dispatch({type: CREATE_ORDER_REQUEST});
    api.createOrder(ingredientsID, token)
        .then((json) => {
            dispatch({type: CREATE_ORDER_SUCCESS, payload: json});
            dispatch({type: OPEN_ORDER_DETAILS_MODAL});
            dispatch({type: TBurgerConstructor.RESET_CONSTRUCTOR});
        })
        .catch(() => dispatch({type: CREATE_ORDER_FAIL}));
};
