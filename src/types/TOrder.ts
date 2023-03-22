import {
    ICreateOrderFail,
    ICreateOrderRequest, ICreateOrderResetConstructor,
    ICreateOrderSuccess,
    IUpdateCurrentOrderContent
} from "../interfaces/data/IOrder";

export enum TOrder {
    UPDATE_CURRENT_ORDER_CONTENT = 'UPDATE_CURRENT_ORDER_CONTENT',
    CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST',
    CREATE_ORDER_FAIL = 'CREATE_ORDER_FAIL',
    CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS',
    RESET_CONSTRUCTOR = 'RESET_CONSTRUCTOR',
}

export type TOrderActions = IUpdateCurrentOrderContent | ICreateOrderRequest | ICreateOrderSuccess | ICreateOrderFail | ICreateOrderResetConstructor
