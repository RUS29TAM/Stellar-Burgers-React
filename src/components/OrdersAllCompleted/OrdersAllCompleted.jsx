import React from 'react';
import styleOrderStatus from "./OrdersAllCompleted.module.css";

const OrdersAllCompleted = ({className, title, count}) => {
    return (
        <div className={className}>
            <p className={`text text_type_main-medium text_color_primary ${styleOrderStatus.text}`}>{title}</p>
            <p className={`text text_type_digits-large text_color_primary ${styleOrderStatus.text}`}>{count}</p>
        </div>
    );
};

export default OrdersAllCompleted;
