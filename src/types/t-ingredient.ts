import {IIngredientFailAction, IIngredientRequestAction, IIngredientSuccessAction} from "../interfaces/data/i-ingredient";

export enum TIngredient {
GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS',
GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS',
GET_INGREDIENTS_FAIL = 'GET_INGREDIENTS_FAIL',
}

export type TIngredientsAction = IIngredientRequestAction | IIngredientSuccessAction | IIngredientFailAction
