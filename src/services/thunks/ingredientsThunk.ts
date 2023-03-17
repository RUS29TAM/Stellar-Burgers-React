import {
    ingredientsFailAction,
    ingredientsRequestAction, ingredientsSuccessAction,
} from '../actions/ingredientsAction'
import api from "../../Api/Api";
import {TAppThunk} from "../../types/TAppThunk";
import {TIngredientsAction} from "../../types/TIngredient";

export const ingredientsThunk = (): TAppThunk<TIngredientsAction> => (dispatch) => {
    dispatch(ingredientsRequestAction())
    api.getIngredients()
        .then(data => dispatch(ingredientsSuccessAction(data.data)))
        .catch(() => dispatch(ingredientsFailAction()))
}
