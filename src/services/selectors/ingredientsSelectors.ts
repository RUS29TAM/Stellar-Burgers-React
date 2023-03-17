import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";

export const ingredientsSelectorReducer = (state: RootState) => state.ingredients
export const ingredientsSelectorDefault = (state: RootState) => state.ingredients.data
export const ingredientsSelectorReducerModified = createSelector(ingredientsSelectorReducer, state => (state))
export const ingredientsSelectorModified = createSelector(ingredientsSelectorDefault, state => state)

