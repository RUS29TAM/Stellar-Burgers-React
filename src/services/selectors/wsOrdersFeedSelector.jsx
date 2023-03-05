import {createSelector} from "@reduxjs/toolkit";

export const wsOrdersFeedReducerSelectorDefault = (state) => state.wsOrdersReducer
export const wsOrdersFeedSelectorDefault = (state) => state.wsOrdersReducer.orders
export const wsOrdersFeedReducerSelectorModified = createSelector(wsOrdersFeedReducerSelectorDefault, state => state)
export const wsOrdersFeedSelectorModified = createSelector(wsOrdersFeedSelectorDefault, state => state)
