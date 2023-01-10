import { nanoid } from 'nanoid';
import {
  ADD_BUN,
  ADD_FILLING,
  REMOVE_FILLING,
  RESET_CONSTRUCTOR,
  SWAP_FILLINGS,
} from '../actions/burger-constructor';

const initialState = {
  bun: null,
  filling: [],
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUN:
      return { ...state, bun: action.payload };
    case ADD_FILLING:
      return {
        ...state,
        filling: [...state.filling, { ...action.payload, constructorId: nanoid() }],
      };
    case REMOVE_FILLING:
      const { constructorId } = action.payload;

      return {
        ...state,
        filling: [...state.filling.filter((element) => element.constructorId !== constructorId)],
      };
    case SWAP_FILLINGS:
      const { from, to } = action.payload;

      const newFilling = [...state.filling];
      [newFilling[from], newFilling[to]] = [newFilling[to], newFilling[from]];

      return { ...state, filling: newFilling };
    case RESET_CONSTRUCTOR:
      return initialState;
    default:
      return state;
  }
};
