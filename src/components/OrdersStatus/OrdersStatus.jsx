import React from 'react';
import styleOrderList from "./OrdersStatus.module.css";
import PropTypes from "prop-types";

const OrdersStatus = ({listComplete, listInWork}) => {
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

OrdersStatus.propTypes = {
    listComplete: PropTypes.arrayOf(PropTypes.number.isRequired),
    listInWork: PropTypes.arrayOf(PropTypes.number.isRequired),
}

export default OrdersStatus;
