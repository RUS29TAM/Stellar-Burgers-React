import React from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import stylePageHistoryOrders from './PageHistoryOrders.module.css'
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

function OrdersHistory() {
  return (
    <div className={stylePageHistoryOrders.orders}>Здесь будет история заказов</div>
  )
}

const PageHistoryOrders = () => {
  return (
    <>
      <AppHeader/>
      <div className={stylePageHistoryOrders.wrapper}>
        <ProfileInfo/>
        <OrdersHistory/>
      </div>
    </>

  );
};

export default PageHistoryOrders;
