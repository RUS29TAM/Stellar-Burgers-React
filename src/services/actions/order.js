import {CONFIG} from '../../components/Api/Api'
import { RESET_CONSTRUCTOR } from './burger-constructor';

export const UPDATE_CURRENT_ORDER_CONTENT = 'UPDATE_CURRENT_ORDER_CONTENT';

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAIL = 'CREATE_ORDER_FAIL';

export const OPEN_ORDER_DETAILS_MODAL = 'OPEN_ORDER_DETAILS_MODAL';
export const CLOSE_ORDER_DETAILS_MODAL = 'CLOSE_ORDER_DETAILS_MODAL';

export const updateCurrentOrderContent = (payload) => ({
  type: UPDATE_CURRENT_ORDER_CONTENT,
  payload,
});

export const closeOrderDetailsModal = () => ({ type: CLOSE_ORDER_DETAILS_MODAL });

export const createOrder = () => (dispatch, getState) => {
  dispatch({ type: CREATE_ORDER_REQUEST });

  const requestBody = {
    ingredients: getState().order.currentOrderContent,
  };

  const requestParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  };

  fetch(CONFIG.orderUrl, requestParams)
    .then((res) => res.json())
    .then((json) => {
      dispatch({ type: CREATE_ORDER_SUCCESS, payload: json });
      dispatch({ type: OPEN_ORDER_DETAILS_MODAL });
      dispatch({ type: RESET_CONSTRUCTOR });
    })
    .catch(() => dispatch({ type: CREATE_ORDER_FAIL }));
};
