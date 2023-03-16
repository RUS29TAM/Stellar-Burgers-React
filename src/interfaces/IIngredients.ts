import {ingredientsAction} from "../types/TIngredients";

export interface IIngredients {
    _id: string,
    name: string,
    image: string,
    price: number,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    image_mobile: string,
    image_large: string,
    __v: number,
}

export interface IIngredientsRequestAction {
type: ingredientsAction.GET_INGREDIENTS_REQUEST
}

export interface IIngredientsSuccessAction {
    type: ingredientsAction.GET_INGREDIENTS_SUCCESS
    payload: IIngredients[]
}
export interface IIngredientsFailAction {
    type: ingredientsAction.GET_INGREDIENTS_FAIL
}
