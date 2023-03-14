import {IIngredientsFailAction, IIngredientsRequestAction, IIngredientsSuccessAction} from "../interfaces/ingredients";

export enum ingredientsAction {
GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS',
GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS',
GET_INGREDIENTS_FAIL = 'GET_INGREDIENTS_FAIL',
}

export type TIngredientsAction = IIngredientsRequestAction | IIngredientsSuccessAction | IIngredientsFailAction
