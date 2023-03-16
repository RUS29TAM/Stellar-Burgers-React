
import {ingredientsAction, TIngredientsAction} from "../../types/TIngredients";
import {IIngredients} from "../../interfaces/IIngredients";

export const ingredientsRequestAction = (): TIngredientsAction => ({type: ingredientsAction.GET_INGREDIENTS_REQUEST})
export const ingredientsSuccessAction = (data: IIngredients[]): TIngredientsAction => ({type: ingredientsAction.GET_INGREDIENTS_SUCCESS, payload: data})
export const ingredientsFailAction = (): TIngredientsAction => ({type: ingredientsAction.GET_INGREDIENTS_FAIL})


