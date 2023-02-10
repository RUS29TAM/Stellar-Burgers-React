import React from 'react';
import styleOrderCard from "./OrderCard.module.css";

const OrderCard = () => {
  return (
    <div className={styleOrderCard.wrapper}>
      <div className={styleOrderCard.idCaption}>
        <p className={`text text_type_digits-default`}>#</p>
        <p className={`text text_type_main-default text_color_inactive`}>15:20</p>
      </div>
      <p className={`text text_type_main-medium`}>Name</p>
      <p className={`text text_type_main-default ${styleOrderCard.status}`}>Status</p>
    </div>
  );
};

export default OrderCard;
