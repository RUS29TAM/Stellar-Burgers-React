import {createSelector} from "@reduxjs/toolkit";

export const wsOrdersFeedReducerSelectorDefault = (state) => state.wsOrdersReducer
export const wsOrdersFeedReducerSelectorModified = createSelector(wsOrdersFeedReducerSelectorDefault, state => state)
