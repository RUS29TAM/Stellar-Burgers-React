import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAIL,
} from '../actions/ingredientsAction';

const initialState = {
    loading: false,
    error: false,
    success: false,
    data: [],
};

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST:
            return {...state, loading: true, success: false, error: false,};
        case GET_INGREDIENTS_SUCCESS:
            return {...state, loading: false, data: action.payload, success: true, error: false,};
        case GET_INGREDIENTS_FAIL:
            return {...state, loading: false, error: true, success: false};
        default:
            return state;
    }
}
