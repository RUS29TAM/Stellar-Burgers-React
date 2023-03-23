import {IIngredient} from "./i-ingredient";

export interface IIngredientsReducer {
    loading: boolean,
    error: boolean,
    success: boolean,
    data: IIngredient[],
}
