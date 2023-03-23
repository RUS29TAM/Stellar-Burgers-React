import {nanoid} from "nanoid";
import {TBurgerConstructorActions, TBurgerConstructor} from "../../types/TBurgerConstructor";

export const addBun = (payload: unknown): { payload: unknown; type: TBurgerConstructor.ADD_BUN } => ({type: TBurgerConstructor.ADD_BUN, payload});
export const addFilling = (payload: unknown): TBurgerConstructorActions => ({type: TBurgerConstructor.ADD_FILLING, id: nanoid(), payload});
export const removeFilling = (payload: any): TBurgerConstructorActions => ({type: TBurgerConstructor.REMOVE_FILLING, payload});
export const swapFillings = (payload: { from: any; to: any; }): TBurgerConstructorActions => ({type: TBurgerConstructor.SWAP_FILLINGS, payload});

