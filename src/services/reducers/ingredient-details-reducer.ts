import {TIngredientDetails, TIngredientDetailsAction} from "../../types/t-ingredient-details";
import {IIngredientDetailsReducer} from "../../interfaces/data/i-ingredient-details-reducer";

const initialState: IIngredientDetailsReducer = {
    ingredient: [],
}

export const ingredientDetailsReducer = (state = initialState, action: TIngredientDetailsAction): IIngredientDetailsReducer => {
    switch (action.type) {
        case TIngredientDetails.SET_INGREDIENT:
            return {ingredient: action.payload}
        default:
            return state
    }
}

