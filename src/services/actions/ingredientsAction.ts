
import {ingredientsAction, TIngredientsAction} from "../../types/ingredients";
import {IIngredients} from "../../interfaces/ingredients";

export const ingredientsRequestAction = (): TIngredientsAction => ({type: ingredientsAction.GET_INGREDIENTS_REQUEST})
export const ingredientsSuccessAction = (data: IIngredients[]): TIngredientsAction => ({type: ingredientsAction.GET_INGREDIENTS_SUCCESS, payload: data})
export const ingredientsFailAction = (): TIngredientsAction => ({type: ingredientsAction.GET_INGREDIENTS_FAIL})


