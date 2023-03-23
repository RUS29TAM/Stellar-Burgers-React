import {IOrderInfo} from "./i-orderInfo";

export interface IwsUserOrdersReducer {
    orders: IOrderInfo[],
    openConnection: boolean,
    error: boolean,
    errorMessage: null | string,
}
