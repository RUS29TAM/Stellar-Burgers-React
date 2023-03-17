import {IIngredientsReducer} from "../../interfaces/IIngredientsReducer";
import {TIngredients, TIngredientsAction} from "../../types/TIngredients";

const initialState: IIngredientsReducer = {
    loading: false,
    error: false,
    success: false,
    data: [],
};

export const ingredientsReducer = (state = initialState, action: TIngredientsAction): IIngredientsReducer => {
    switch (action.type) {
        case TIngredients.GET_INGREDIENTS_REQUEST:
            return {...state, loading: true, success: false, error: false,};
        case TIngredients.GET_INGREDIENTS_SUCCESS:
            return {...state, loading: false, data: action.payload, success: true, error: false,};
        case TIngredients.GET_INGREDIENTS_FAIL:
            return {...state, loading: false, error: true, success: false};
        default:
            return state;
    }
}
