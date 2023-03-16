import {IorderInfoType} from "./IOrdersInfo";

export interface IwsUserOrdersReducer {
    orders: IorderInfoType[],
    openConnection: boolean,
    error: boolean,
    errorMessage: null | string,
}
