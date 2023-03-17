import {nanoid} from 'nanoid';
import {IBurgerConstructorReducer} from "../../interfaces/IBurgerConstructorReducer";
import {TBurgerConstructor, TBurgerConstructorActions} from "../../types/TBurgerConstructor";

const initialState: IBurgerConstructorReducer = {
    bun: null,
    filling: [],
};

export const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorActions): IBurgerConstructorReducer => {
    switch (action.type) {
        case TBurgerConstructor.ADD_BUN:
            return {...state, bun: action.payload};
        case TBurgerConstructor.ADD_FILLING:
            return {
                ...state,
                filling: [...state.filling, {...action.payload, uniqueId: action.id, constructorId: nanoid()}],
            };
        case TBurgerConstructor.REMOVE_FILLING:
            const {constructorId} = action.payload;

            return {
                ...state,
                filling: state.filling.filter((element) => element.constructorId !== constructorId),
            };
        case TBurgerConstructor.SWAP_FILLINGS:
            const {from, to} = action.payload;

            const newFilling = [...state.filling];
            [newFilling[from], newFilling[to]] = [newFilling[to], newFilling[from]];

            return {...state, filling: newFilling};
        case TBurgerConstructor.RESET_CONSTRUCTOR:
            return initialState;

        default:
            return state;
    }
};
