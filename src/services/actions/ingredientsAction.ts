
import {TIngredient, TIngredientsAction} from "../../types/TIngredient";
import {IIngredient} from "../../interfaces/data/IIngredient";

export const ingredientsRequestAction = (): TIngredientsAction => ({type: TIngredient.GET_INGREDIENTS_REQUEST})
export const ingredientsSuccessAction = (data: IIngredient[]): TIngredientsAction => ({type: TIngredient.GET_INGREDIENTS_SUCCESS, payload: data})
export const ingredientsFailAction = (): TIngredientsAction => ({type: TIngredient.GET_INGREDIENTS_FAIL})


