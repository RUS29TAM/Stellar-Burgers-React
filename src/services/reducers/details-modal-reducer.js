import {
  OPEN_DETAILS_MODAL,
  CLOSE_DETAILS_MODAL,
} from '../actions/details-modal';

const initialState = {
  isOpen: false,
  details: null,
};

export const detailsModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DETAILS_MODAL: {
      return { ...state, isOpen: true, details: { ...action.payload } };
    }
    case CLOSE_DETAILS_MODAL: {
      return { ...state, isOpen: false, details: null };
    }
    default:
      return state;
  }
};
