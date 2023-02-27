import React from 'react';
import styleOrderList from "./OrdersStatus.module.css";
import PropTypes from "prop-types";

const OrdersStatus = ({completeOrdersId,inWorkOrdersId}) => {
  return (
    <div className={`${styleOrderList.ordersWorkInfo}`}>
      <div className={styleOrderList.completeContainer}>
        <p className={'text text_type_main-medium text_color_primary'}>Готовы:</p>
        <ul className={styleOrderList.flexContainer}>
          {completeOrdersId.map(orderId => <li className={"text text_type_main-medium text_color_success"} key={orderId}>{orderId}</li>)}
        </ul>
      </div>
      <div className={styleOrderList.workContainer}>
        <p className={'text text_type_main-medium text_color_primary'}>В работе:</p>
        <ul className={`${styleOrderList.flexContainer}`}>
          {inWorkOrdersId.map(orderId => <li className={"text text_type_main-medium text_color_primary"} key={orderId}>{orderId}</li>)}
        </ul>
      </div>
    </div>)
};

OrdersStatus.propTypes = {
  completeOrdersId: PropTypes.arrayOf(PropTypes.number.isRequired),
  inWorkOrdersId: PropTypes.arrayOf(PropTypes.number.isRequired),
}

export default OrdersStatus;
