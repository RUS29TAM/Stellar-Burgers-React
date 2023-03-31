import {IIngredient} from "./i-ingredient";
import {TIngredientDetails} from "../../types/t-ingredient-details";
export interface IIngredientDetailsAction {
    type: TIngredientDetails.SET_INGREDIENT
    payload: IIngredient;
}
