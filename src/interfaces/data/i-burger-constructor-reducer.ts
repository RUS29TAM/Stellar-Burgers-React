import {TBurgerConstructor} from "../../types/t-burger-constructor";
import {IIngredient} from "./i-ingredient";

export interface IBurgerConstructorReducer {
    bun: IIngredient | null,
    filling: IIngredient[],
}

export interface IAddBun {
    payload: IIngredient | null;
    type: TBurgerConstructor.ADD_BUN
}

export interface IAddFilling {
    id: number | string | undefined;
    payload: any;
    type: TBurgerConstructor.ADD_FILLING
}

export interface IRemoveFilling {
    payload: IIngredient;
    type: TBurgerConstructor.REMOVE_FILLING
}

export interface ISwapFillings {
    payload: any;
    type: TBurgerConstructor.SWAP_FILLINGS
}

export interface IResetConstructor {
    type: TBurgerConstructor.RESET_CONSTRUCTOR
}





