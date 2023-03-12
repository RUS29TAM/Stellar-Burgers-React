import {IorderInfoType} from "./orders";

export interface IwsOrdersFeedsReduser {
    orders: IorderInfoType[],
    total: number,
    totalToday: number,
    openConnection: boolean,
    error: boolean,
    errorMessage: null | string,
}
