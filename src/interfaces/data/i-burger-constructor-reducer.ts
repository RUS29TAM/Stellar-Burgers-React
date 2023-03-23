import {TBurgerConstructor} from "../../types/t-burger-constructor";

export interface IBurgerConstructorReducer {
    bun: null,
    filling: any[],
}

export interface IAddBun {
    payload: null;
    type: TBurgerConstructor.ADD_BUN
}

export interface IAddFilling {
    id: any;
    payload: any;
    type: TBurgerConstructor.ADD_FILLING
}

export interface IRemoveFilling {
    payload: any;
    type: TBurgerConstructor.REMOVE_FILLING
}

export interface ISwapFillings {
    payload: any;
    type: TBurgerConstructor.SWAP_FILLINGS
}

export interface IResetConstructor {
    type: TBurgerConstructor.RESET_CONSTRUCTOR
}





