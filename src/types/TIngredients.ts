import {IIngredientsFailAction, IIngredientsRequestAction, IIngredientsSuccessAction} from "../interfaces/IIngredients";

export enum TIngredients {
GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS',
GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS',
GET_INGREDIENTS_FAIL = 'GET_INGREDIENTS_FAIL',
}

export type TIngredientsAction = IIngredientsRequestAction | IIngredientsSuccessAction | IIngredientsFailAction
