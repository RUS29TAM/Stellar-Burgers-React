import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";

export const wsOrdersFeedReducerSelectorDefault = (state: RootState) => state.wsOrdersReducer
export const wsOrdersFeedSelectorDefault = (state: RootState) => state.wsOrdersReducer.orders
export const wsOrdersFeedReducerSelectorModified = createSelector(wsOrdersFeedReducerSelectorDefault, state => state)
export const wsOrdersFeedSelectorModified = createSelector(wsOrdersFeedSelectorDefault, state => state)
