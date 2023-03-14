import {IorderInfoType} from "./ordersInfo";

export interface IwsOrdersFeedsReducer {
    orders: IorderInfoType[],
    total: number,
    totalToday: number,
    openConnection: boolean,
    error: boolean,
    errorMessage: null | string,
}
