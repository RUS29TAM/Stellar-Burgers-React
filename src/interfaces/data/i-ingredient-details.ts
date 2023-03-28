import {TIngredientDetails} from "../../types/t-ingredient-details";
import {IIngredient} from "./i-ingredient";
export interface IIngredientDetailsAction {
    type: TIngredientDetails.SET_INGREDIENT
    payload: IIngredient[]
}
