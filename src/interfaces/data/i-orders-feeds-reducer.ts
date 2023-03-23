import {IOrderInfo} from "./i-orderInfo";

export interface IwsOrdersFeedsReducer {
    orders: IOrderInfo[],
    total: number,
    totalToday: number,
    openConnection: boolean,
    error: boolean,
    errorMessage: null | string,
}
