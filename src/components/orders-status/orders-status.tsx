import React, {FC} from 'react';
import styleOrderList from "./orders-status.module.css";

interface IOrdersStatus {
    listComplete: number[],
    listInWork: number[],
}
const OrdersStatus: FC<IOrdersStatus> = ({listComplete, listInWork}) => {
    return (
        <div className={`${styleOrderList.ordersStat}`}>
            <div className={styleOrderList.completeContainer}>
                <p className={'text text_type_main-medium text_color_primary'}>Готовы:</p>
                <ul className={styleOrderList.flexContainer}>
                    {listComplete.map(orderId => <li className={"text text_type_main-medium text_color_success"}
                                                     key={orderId}>{orderId}</li>)}
                </ul>
            </div>
            <div className={styleOrderList.workContainer}>
                <p className={'text text_type_main-medium text_color_primary'}>В работе:</p>
                <ul className={`${styleOrderList.flexContainer}`}>
                    {listInWork.map(orderId => <li className={"text text_type_main-medium text_color_primary"}
                                                   key={orderId}>{orderId}</li>)}
                </ul>
            </div>
        </div>)
};

export default OrdersStatus;
