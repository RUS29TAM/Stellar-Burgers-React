import {
    ingredientsFailAction,
    ingredientsRequestAction, ingredientsSuccessAction,
} from '../actions/ingredients-action'
import api from "../../api/api";
import {TAppThunk} from "../../types/t-app-thunk";
import {TIngredientsAction} from "../../types/t-ingredient";

export const ingredientsThunk = (): TAppThunk<TIngredientsAction> => (dispatch) => {
    dispatch(ingredientsRequestAction())
    api.getIngredients()
        .then(data => dispatch(ingredientsSuccessAction(data.data)))
        .catch(() => dispatch(ingredientsFailAction()))
}
