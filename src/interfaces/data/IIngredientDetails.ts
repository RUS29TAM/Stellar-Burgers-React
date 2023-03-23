import {IIngredients} from "./IIngredients";
import {TIngredientDetails} from "../../types/TIngredientDetails";
export interface IIngredientDetailsAction {
    type: TIngredientDetails.SET_INGREDIENT
    payload: string | IIngredients | null;
}
