import React from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import styleOrderFeed from './PageOrderFeed.module.css';

function OrdersFeeds() {
  return (
    <div className={styleOrderFeed.wrapper}>
      <div className={styleOrderFeed.feeds}>Здесь будет лента заказов</div>
    </div>)
}

const PageOrderFeed = () => {
  return (
    <>
      <AppHeader/>
      <OrdersFeeds/>
    </>
  );
};

export default PageOrderFeed;
