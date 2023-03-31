import {IIngredientsReducer} from "../../interfaces/data/i-ingredients-reducer";
import {TIngredient, TIngredientsAction} from "../../types/t-ingredient";

const initialState: IIngredientsReducer = {
    loading: false,
    error: false,
    success: false,
    data: [],
};

export const ingredientsReducer = (state = initialState, action: TIngredientsAction): IIngredientsReducer => {
    switch (action.type) {
        case TIngredient.GET_INGREDIENTS_REQUEST:
            return {...state, loading: true, success: false, error: false,};
        case TIngredient.GET_INGREDIENTS_SUCCESS:
            return {...state, loading: false, data: action.payload, success: true, error: false,};
        case TIngredient.GET_INGREDIENTS_FAIL:
            return {...state, loading: false, error: true, success: false};
        default:
            return state;
    }
}
