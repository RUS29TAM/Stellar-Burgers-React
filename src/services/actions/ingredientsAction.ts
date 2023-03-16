
import {TIngredients, TIngredientsAction} from "../../types/TIngredients";
import {IIngredients} from "../../interfaces/IIngredients";

export const ingredientsRequestAction = (): TIngredientsAction => ({type: TIngredients.GET_INGREDIENTS_REQUEST})
export const ingredientsSuccessAction = (data: IIngredients[]): TIngredientsAction => ({type: TIngredients.GET_INGREDIENTS_SUCCESS, payload: data})
export const ingredientsFailAction = (): TIngredientsAction => ({type: TIngredients.GET_INGREDIENTS_FAIL})


