import {IOrderInfo} from "../data/i-orderInfo";

export interface IOrderReducer {
    currentOrderContent: any[],
    loading: boolean,
    error: boolean,
    createdOrders: null | {name: string, number: number} | IOrderInfo
    errorMessage: null | string;
}
