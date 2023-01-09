export const ADD_BUN = 'ADD_BUN';
export const ADD_FILLING = 'ADD_FILLING';
export const REMOVE_FILLING = 'REMOVE_FILLING';
export const SWAP_FILLINGS = 'SWAP_FILLINGS';
export const RESET_CONSTRUCTOR = 'RESET_CONSTRUCTOR';

export const addBun = (payload) => ({ type: ADD_BUN, payload });
export const addFilling = (payload) => ({ type: ADD_FILLING, payload });
export const removeFilling = (payload) => ({ type: REMOVE_FILLING, payload });
export const swapFillings = (payload) => ({ type: SWAP_FILLINGS, payload });
