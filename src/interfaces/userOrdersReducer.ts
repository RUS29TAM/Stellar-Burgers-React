import {IorderInfoType} from "./ordersInfo";

export interface IwsUserOrdersReducer {
    orders: IorderInfoType[],
    openConnection: boolean,
    error: boolean,
    errorMessage: null | string,
}
