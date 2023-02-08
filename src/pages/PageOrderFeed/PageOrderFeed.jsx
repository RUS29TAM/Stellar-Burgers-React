import React from 'react';
import OrderList from "../../components/OrderList/OrderList";
import styleOrderList from './PageOrderFeed.module.css'

const PageOrderFeed = () => {
  return (
    <>
      <h1 className={`text text_type_main-large ${styleOrderList.title}`}>Лента заказов</h1>
      <OrderList/>
    </>
  );
};

export default PageOrderFeed;
