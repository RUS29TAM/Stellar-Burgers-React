import {IIngredients} from "./i-ingredients";
import {TIngredientDetails} from "../../types/t-ingredient-details";
export interface IIngredientDetailsAction {
    type: TIngredientDetails.SET_INGREDIENT
    payload: string | IIngredients | null;
}
