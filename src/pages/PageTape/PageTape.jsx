import React, {useCallback, useEffect, useMemo, useState} from 'react';
import stylesTape from './PageTape.module.css'
import OrdersList from "../../components/OrdersList/OrdersList";
import OrdersStatus from "../../components/OrdersStatus/OrdersStatus";
import PreLoader from "../../components/PreLoader/PreLoader";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {wsOrdersFeedReducerSelectorModified} from "../../services/selectors/wsOrdersFeedSelector";
import OrderCard from "../../components/OrderCard/OrderCard";
import Modal from "../../components/Modal/Modal";
import OrderData from "../../components/OrderData/OrderData";
import {ingredientsSelectorModified} from "../../services/selectors/ingredientsSelectors";
import {ingredientsThunk} from "../../services/thunks/ingredientsThunk";
import {wsOrdersFeedDisconnectAction, wsOrdersFeedsConnectAction} from "../../services/actions/wsOrdersFeedsAction";
import {WS_CONFIG} from "../../Api/Api";

const PageTape = () => {
const dispatch = useDispatch()
const location = useLocation()
const navigate = useNavigate()
const ingredients = useSelector(ingredientsSelectorModified)
const {total,totalToday,orders} = useSelector(wsOrdersFeedReducerSelectorModified)

  const [orderInfoModalState,setOrderInfoModalState] = useState(location.state?.from === 'feed')
  const handleCloseInfoModal = useCallback(() => {
    setOrderInfoModalState(false)
    navigate('/feed')
  },[navigate])

  const {completeOrdersList,inWorkOrdersList} = useMemo(() => orders.reduce((prev,order) => order.status === "done" ? {...prev, completeOrdersList: [...prev.completeOrdersList,order.number]} : {...prev, inWorkOrdersList: [...prev.inWorkOrdersList,order.number]},{completeOrdersList: [],inWorkOrdersList: []}),[orders])

  useEffect(() => {
    if (!ingredients.length) dispatch(ingredientsThunk())
    // eslint-disable-next-line
  },[ingredients])

  useEffect(() => {
    dispatch(wsOrdersFeedsConnectAction(WS_CONFIG.feedsUrl))
    return () => {dispatch(wsOrdersFeedDisconnectAction())}
    // eslint-disable-next-line
  },[])

  return (
    ingredients.length && orders.length
      ?
      <div className={stylesTape.content}>
        <h2 className={"text text_type_main-large text_color_primary mt-10 mb-5"}>Лента заказов</h2>
        <div className={stylesTape.feedContainer}>
          <div className={`${stylesTape.feeds} pr-4`}>
            {orders.map(order => <OrderCard elementPosition={"feed"} orderInfo={order} key={order._id}/>)}
          </div>
          <div className={"ml-15"}>
            <OrdersList completeOrdersId={completeOrdersList} inWorkOrdersId={inWorkOrdersList}/>
            <OrdersStatus title={"Выполнено за все время:"} count={total} className={"mt-15"} key={"complete_all_time"}/>
            <OrdersStatus title={"Выполнено за сегодня:"} count={totalToday} className={"mt-15"} key={"complete_today"}/>
          </div>
        </div>
        {orderInfoModalState &&
          <Modal handleClose={handleCloseInfoModal}>
            <div className={"mt-15 mb-15"}>
              <OrderData  orderInfo={orders.find(order => order._id === location.state.order._id)}/>
            </div>
          </Modal>
        }
      </div>
      :
      <PreLoader/>
  );
};

export default PageTape;
