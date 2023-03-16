import {nanoid} from "nanoid";
import {IBurgerConstructorActions, TBurgerConstructor} from "../../types/TBurgerConstructor";

export const addBun = (payload: unknown): { payload: unknown; type: TBurgerConstructor.ADD_BUN } => ({type: TBurgerConstructor.ADD_BUN, payload});
export const addFilling = (payload: unknown): IBurgerConstructorActions => ({type: TBurgerConstructor.ADD_FILLING, id: nanoid(), payload});
export const removeFilling = (payload: any): IBurgerConstructorActions => ({type: TBurgerConstructor.REMOVE_FILLING, payload});
export const swapFillings = (payload: { from: any; to: any; }): IBurgerConstructorActions => ({type: TBurgerConstructor.SWAP_FILLINGS, payload});
//export const resetConstructor = (payload: any): IBurgerConstructorActions => ({type: TBurgerConstructor.RESET_CONSTRUCTOR, payload});