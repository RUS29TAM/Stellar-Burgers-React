import {IOrderInfo} from "../data/i-orderInfo";

export interface ICreateOrderResp {
success: boolean,
    order: string,
    name: IOrderInfo,
}
