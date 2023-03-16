import {
    IAddFilling,
    IAddBun,
    IRemoveFilling,
    ISwapFillings,
    IResetConstructor
} from "../interfaces/IBurgerConstructorReducer";

export enum TBurgerConstructor {
    ADD_BUN = 'ADD_BUN',
    ADD_FILLING = 'ADD_FILLING',
    REMOVE_FILLING = 'REMOVE_FILLING',
    SWAP_FILLINGS = 'SWAP_FILLINGS',
    RESET_CONSTRUCTOR = 'RESET_CONSTRUCTOR',
}
export type IBurgerConstructorActions = IAddBun
    | IAddFilling
    | IRemoveFilling
    | ISwapFillings
    | IResetConstructor
