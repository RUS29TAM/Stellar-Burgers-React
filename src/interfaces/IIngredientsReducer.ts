import {IIngredients} from "./IIngredients";

export interface IIngredientsReducer {
    loading: boolean,
    error: boolean,
    success: boolean,
    data: IIngredients[],
}
