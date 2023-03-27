import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";
import {IIngredientsReducer} from "../../interfaces/data/i-ingredients-reducer";

export const ingredientsSelectorReducer = (state: RootState) => state.ingredients
export const ingredientsSelectorDefault = (state: RootState):IIngredientsReducer['data'] => state.ingredients.data
export const ingredientsSelectorReducerModified = createSelector(ingredientsSelectorReducer, state => (state))
export const ingredientsSelectorModified = createSelector(ingredientsSelectorDefault, state => state)

