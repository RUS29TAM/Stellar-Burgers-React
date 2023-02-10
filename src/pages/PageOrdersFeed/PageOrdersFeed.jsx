import React from 'react';
import OrdersList from "../../components/OrdersList/OrdersList";
import OrdersStatus from "../../components/OrdersStatus/OrdersStatus";
import stylePageOrdersFeed from './PageOrdersFeed.module.css'

const PageOrdersFeed = () => {
  return (
    <div className={stylePageOrdersFeed.wrapper}>
      <h1 className={`text text_type_main-large`}>Лента заказов</h1>
      <div className={stylePageOrdersFeed.container}>
        <OrdersList/>
        <OrdersStatus/>
      </div>
    </div>
  );
};

export default PageOrdersFeed;
