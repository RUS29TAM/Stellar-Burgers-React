import {nanoid} from "nanoid";
import {TBurgerConstructorActions, TBurgerConstructor} from "../../types/t-burger-constructor";
import {IIngredient} from "../../interfaces/data/i-ingredient";

export const addBun = (payload: IIngredient | null): TBurgerConstructorActions => ({type: TBurgerConstructor.ADD_BUN, payload});
export const addFilling = (payload: IIngredient): TBurgerConstructorActions => ({type: TBurgerConstructor.ADD_FILLING, id: nanoid(), payload});
export const removeFilling = (payload: IIngredient): TBurgerConstructorActions => ({type: TBurgerConstructor.REMOVE_FILLING, payload});
export const swapFillings = (payload: { from: any; to: any; }): TBurgerConstructorActions => ({type: TBurgerConstructor.SWAP_FILLINGS, payload});

