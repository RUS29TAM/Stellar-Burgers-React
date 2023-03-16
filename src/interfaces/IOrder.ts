import {TOrder} from "../types/TOrder";

export interface IUpdateCurrentOrderContent {
    type: TOrder.UPDATE_CURRENT_ORDER_CONTENT
    payload: any[];
}

export interface ICreateOrderRequest {
    type: TOrder.CREATE_ORDER_REQUEST;
    payload: any[],
}

export interface ICreateOrderSuccess {
    type: TOrder.CREATE_ORDER_SUCCESS;
    payload: any,
}

