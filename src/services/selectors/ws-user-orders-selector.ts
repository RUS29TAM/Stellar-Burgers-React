import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";

export const wsUserOrdersReducerSelectorDefault = (state: RootState) => state.wsUserOrderReducer
export const wsUserOrderSelectorDefault = (state: RootState) => state.wsUserOrderReducer.orders
export const wsUserOrdersReducerSelectorModified = createSelector(wsUserOrdersReducerSelectorDefault, state => state)
export const wsUserOrderSelectorModified = createSelector(wsUserOrderSelectorDefault, state => state)
