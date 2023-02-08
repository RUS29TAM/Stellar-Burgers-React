import React from 'react';
import styleOrderFeed from "../../pages/PageOrderFeed/PageOrderFeed.module.css";

const OrderList = () => {
  return (
    <div className={styleOrderFeed.wrapper}>
      <div className={styleOrderFeed.feeds}>Здесь будет лента заказов</div>
    </div>)
};

export default OrderList;
