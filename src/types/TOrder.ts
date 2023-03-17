import {ICreateOrderRequest, ICreateOrderSuccess, IUpdateCurrentOrderContent} from "../interfaces/IOrder";

export enum TOrder {
    UPDATE_CURRENT_ORDER_CONTENT = 'UPDATE_CURRENT_ORDER_CONTENT',
    CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST',
    CREATE_ORDER_FAIL = 'CREATE_ORDER_FAIL',
    CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS',
    OPEN_ORDER_DETAILS_MODAL = 'OPEN_ORDER_DETAILS_MODAL',
    RESET_CONSTRUCTOR = 'RESET_CONSTRUCTOR',
}

export type TOrderActions = IUpdateCurrentOrderContent | ICreateOrderRequest | ICreateOrderSuccess
