import {TOrder} from "../types/TOrder";

interface IUpdateCurrentOrderContent {
    type: TOrder.UPDATE_CURRENT_ORDER_CONTENT
    payload: any[];
}

interface ICreateOrderRequest {
    type: TOrder.CREATE_ORDER_REQUEST;
    payload: any[],
}

interface ICreateOrderSuccess {
    type: TOrder.CREATE_ORDER_SUCCESS;
    payload: any,
}

export type TOrderActions = IUpdateCurrentOrderContent | ICreateOrderRequest | ICreateOrderSuccess
