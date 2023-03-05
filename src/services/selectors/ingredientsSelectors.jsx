import {createSelector} from "@reduxjs/toolkit";

export const ingredientsSelectorReducer = state => state.ingredients
export const ingredientsSelectorDefault = state => state.ingredients.data
export const ingredientsSelectorReducerModified = createSelector(ingredientsSelectorReducer, state => (state))
export const ingredientsSelectorModified = createSelector(ingredientsSelectorDefault, state => state)

