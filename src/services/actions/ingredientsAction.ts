
import {TIngredients, TIngredientsAction} from "../../types/TIngredients";
import {IIngredient} from "../../interfaces/IIngredient";

export const ingredientsRequestAction = (): TIngredientsAction => ({type: TIngredients.GET_INGREDIENTS_REQUEST})
export const ingredientsSuccessAction = (data: IIngredient[]): TIngredientsAction => ({type: TIngredients.GET_INGREDIENTS_SUCCESS, payload: data})
export const ingredientsFailAction = (): TIngredientsAction => ({type: TIngredients.GET_INGREDIENTS_FAIL})


