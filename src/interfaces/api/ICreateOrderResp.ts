import {IOrderInfo} from "../data/IOrderInfo";

export interface ICreateOrderResp {
success: boolean,
    order: string,
    name: IOrderInfo,
}
