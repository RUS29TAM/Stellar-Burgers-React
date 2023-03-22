import {TIngredient} from "../../types/TIngredient";

export interface IIngredient {
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

export interface IIngredientRequestAction {
type: TIngredient.GET_INGREDIENTS_REQUEST
}

export interface IIngredientSuccessAction {
    type: TIngredient.GET_INGREDIENTS_SUCCESS
    payload: IIngredient[]
}
export interface IIngredientFailAction {
    type: TIngredient.GET_INGREDIENTS_FAIL
}
