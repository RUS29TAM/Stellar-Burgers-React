import React from 'react';
import styleOrderStatus from "./OrdersStatus.module.css";

const OrdersStatus = ({className, title, count}) => {
  return (
    <div className={className}>
      <p className={`text text_type_main-medium text_color_primary ${styleOrderStatus.shadow}`}>{title}</p>
      <p className={`text text_type_digits-large text_color_primary ${styleOrderStatus.shadow}`}>{count}</p>
    </div>
  );
};

export default OrdersStatus;
