import React from 'react';
import styleOrderDetails from './OrderDetails.module.css';
import orderAcceptedDone from '../../images/icon/order-accepted-done.svg';

const OrderDetails = ({lastOrder}) => {


  return (
    <div className={`pt-30 pb-30 ${styleOrderDetails.wrapper}`}>
      <p className={`text text_type_digits-large mb-8 ${styleOrderDetails.numOrder}`}>{lastOrder?.number}</p>
      <p className="text text_type_main-medium mb-15">Идентификатор заказа</p>
      <img className="mb-15" src={orderAcceptedDone} alt='Ваш заказ начали готовить'/>
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  );
};

export default OrderDetails
