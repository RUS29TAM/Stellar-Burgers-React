import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAIL,
} from '../actions/ingredients';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  isSuccess: false
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return { ...state, isLoading: true, isSuccess: false, isError: false,};
    case GET_INGREDIENTS_SUCCESS:
      return { ...state, isLoading: false, data: action.payload, isSuccess: true, isError: false,};
    case GET_INGREDIENTS_FAIL:
      return { ...state, isLoading: false, isError: true, isSuccess: false };
    default:
      return state;
  }
}
