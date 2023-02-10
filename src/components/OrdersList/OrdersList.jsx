import React from 'react';
import styleOrderList from "./OrdersList.module.css";
import OrderCard from "../OrderCard/OrderCard";

const OrdersList = () => {
  return (
    <div className={styleOrderList.wrapper}>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>

    </div>
  )
};

export default OrdersList;
