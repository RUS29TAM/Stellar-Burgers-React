import React from 'react';
import OrderCard from "../OrderCard/OrderCard";
import styleOrderList from "./OrdersList.module.css";

const OrdersList = () => {
  return (
    // <div className={styleOrderList.wrapper}>
    <div className={styleOrderList.wrapper}>
      <h1 className={`text text_type_main-large`}>Лента заказов</h1>
      <div className={styleOrderList.container}>

        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
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
    </div>
    // </div>
  )
};

export default OrdersList;
