import {IOrderInfo} from "../IOrderInfo";

export interface ICreateOrderResp {
success: boolean,
    order: string,
    name: IOrderInfo,
}
