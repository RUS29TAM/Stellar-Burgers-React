export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAIL = 'GET_INGREDIENTS_FAIL';

export const ingredientsRequestAction = () => ({type: GET_INGREDIENTS_REQUEST})
export const ingredientsSuccessAction = (data) => ({type: GET_INGREDIENTS_SUCCESS, payload: data})
export const ingredientsFailAction = () => ({type: GET_INGREDIENTS_FAIL})


