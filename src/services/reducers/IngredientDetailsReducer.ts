import {TIngredientDetails, TIngredientDetailsAction} from "../../types/TIngredientDetails";
import {IIngredientDetailsReducer} from "../../interfaces/IIngredientDetailsReducer";

const initialState: IIngredientDetailsReducer = {
    ingredient: null,
}

export const ingredientDetailsReducer = (state = initialState, action: TIngredientDetailsAction): IIngredientDetailsReducer => {
    switch (action.type) {
        case TIngredientDetails.SET_INGREDIENT:
            return {ingredient: action.payload}
        default:
            return state
    }
}

