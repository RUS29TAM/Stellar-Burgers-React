import {IIngredients} from "./ingredients";

export interface IIngredientsReducer {
    loading: boolean,
    error: boolean,
    success: boolean,
    data: IIngredients[],
}
