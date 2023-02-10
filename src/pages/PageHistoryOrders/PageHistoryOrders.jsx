import React from 'react';
import stylePageHistoryOrders from './PageHistoryOrders.module.css';
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

function OrdersHistory() {
  return (//это просто заготовка под будущую страницу
    <div className={stylePageHistoryOrders.wrapper}>
      <ProfileInfo/>
      <div className={stylePageHistoryOrders.orders}>Здесь будет история заказов</div>
    </div>
  )
}

const PageHistoryOrders = () => {
  return (
    <OrdersHistory/>
  );
};

export default PageHistoryOrders;
