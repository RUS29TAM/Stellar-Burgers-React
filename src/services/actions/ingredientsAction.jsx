import api from "../../Api/Api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAIL = 'GET_INGREDIENTS_FAIL';

export const ingredientsRequestAction = () => ({type: GET_INGREDIENTS_REQUEST})
export const ingredientsSuccessAction = (data) => ({type: GET_INGREDIENTS_SUCCESS, payload: data})
export const ingredientsFailAction = () => ({type: GET_INGREDIENTS_FAIL})

// export const getIngredients = () => (dispatch) => {
//   dispatch({type: GET_INGREDIENTS_REQUEST});
//   api.getIngredients()
//     .then((json) =>
//     dispatch({type: GET_INGREDIENTS_SUCCESS, payload: json.data}),
//     )
//     .catch(() => dispatch({type: GET_INGREDIENTS_FAIL}));
// };



