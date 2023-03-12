import {IorderInfoType} from "./orders";

export interface IwsUserOrdersReduser {
    orders: IorderInfoType[],
    openConnection: boolean,
    error: boolean,
    errorMessage: null | string,
}
