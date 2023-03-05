import {createSelector} from "@reduxjs/toolkit";
export const wsUserOrdersReducerSelectorDefault = (state) => state.wsUserOrderReducer
export const wsUserOrderSelectorDefault = (state) => state.wsUserOrderReducer.orders
export const wsUserOrdersReducerSelectorModified = createSelector(wsUserOrdersReducerSelectorDefault, state => state)
export const wsUserOrderSelectorModified = createSelector(wsUserOrderSelectorDefault, state => state)
