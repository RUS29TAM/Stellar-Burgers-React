import React from 'react';
import stylePageHistoryOrders from './PageHistoryOrders.module.css';
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import OrdersList from "../../components/OrdersList/OrdersList";

// function OrdersHistory() {
//   return (//это просто заготовка под будущую страницу
//     <div className={stylePageHistoryOrders.wrapper}>
//       <ProfileInfo/>
//       <div className={stylePageHistoryOrders.orders}>Здесь будет история заказов</div>
//
//   )
// }

const PageHistoryOrders = () => {
  return (
    <div className={stylePageHistoryOrders.wrapper}>
      <ProfileInfo/>
      <div className={stylePageHistoryOrders.container}>
        <OrdersList/>
      </div>
    </div>
  );
};

export default PageHistoryOrders;
