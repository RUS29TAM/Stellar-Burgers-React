import {IIngredient} from "./IIngredient";

export interface IIngredientsReducer {
    loading: boolean,
    error: boolean,
    success: boolean,
    data: IIngredient[],
}
