import {
    GET_INGREDIENTS_FAIL,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS, ingredientsFailAction,
    ingredientsRequestAction, ingredientsSuccessAction,
} from '../actions/ingredientsAction'
import api from "../../Api/Api";

export const ingredientsThunk = () => dispatch => {
    dispatch(ingredientsRequestAction())
    api.getIngredients()
        .then(data => dispatch(ingredientsSuccessAction(data.data)))
        .catch(() => dispatch(ingredientsFailAction()))
}
