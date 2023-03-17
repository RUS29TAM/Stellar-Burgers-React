
import {ingredientsAction, TIngredientsAction} from "../../types/TIngredients";
import {IIngredient} from "../../interfaces/IIngredient";

export const ingredientsRequestAction = (): TIngredientsAction => ({type: ingredientsAction.GET_INGREDIENTS_REQUEST})
export const ingredientsSuccessAction = (data: IIngredient[]): TIngredientsAction => ({type: ingredientsAction.GET_INGREDIENTS_SUCCESS, payload: data})
export const ingredientsFailAction = (): TIngredientsAction => ({type: ingredientsAction.GET_INGREDIENTS_FAIL})


