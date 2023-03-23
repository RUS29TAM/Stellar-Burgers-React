import {IOrderInfo} from "./IOrderInfo";

export interface IwsUserOrdersReducer {
    orders: IOrderInfo[],
    openConnection: boolean,
    error: boolean,
    errorMessage: null | string,
}
