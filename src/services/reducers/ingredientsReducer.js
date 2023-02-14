import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAIL,
} from '../actions/ingredients';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return { ...state, isLoading: true };
    case GET_INGREDIENTS_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case GET_INGREDIENTS_FAIL:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
