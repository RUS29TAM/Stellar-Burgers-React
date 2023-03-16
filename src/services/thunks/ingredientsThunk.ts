import {
    ingredientsFailAction,
    ingredientsRequestAction, ingredientsSuccessAction,
} from '../actions/ingredientsAction'
import api from "../../Api/Api";
import {TAppThunk} from "./TAppThunk";
import {TIngredientsAction} from "../../types/TIngredients";

export const ingredientsThunk = ():  TAppThunk<TIngredientsAction> => (dispatch) => {
    dispatch(ingredientsRequestAction())
    api.getIngredients()
        .then(data => dispatch(ingredientsSuccessAction(data.data)))
        .catch(() => dispatch(ingredientsFailAction()))
}
