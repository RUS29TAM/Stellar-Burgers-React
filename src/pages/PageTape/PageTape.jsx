import React, {useCallback, useEffect, useMemo, useState} from 'react';
import stylesTape from './PageTape.module.css';
import OrdersStatus from "../../components/OrdersStatus/OrdersStatus";
import OrdersAllCompleted from "../../components/OrdersAllCompleted/OrdersAllCompleted";
import PreLoader from "../../components/PreLoader/PreLoader";
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {wsOrdersFeedReducerSelectorModified} from "../../services/selectors/wsOrdersFeedSelector";
import OrderCard from "../../components/OrderCard/OrderCard";
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
  const closeModal = useCallback(() => {
    setOrderInfoModalState(false)
    navigate('/feed')
  },[navigate])

  const {listComplete,listInWork} = useMemo(() => orders.reduce((previous,order) => order.status === "done"
    ?
    {...previous, listComplete: [...previous.listComplete,order.number]}
    :
    {...previous, listInWork: [...previous.listInWork,order.number]},{listComplete: [],listInWork: []}),
    [orders])

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
        <h2 className={` text text_type_main-large text_color_primary mb-5 ${stylesTape.title}`}>Лента заказов</h2>
        <div className={stylesTape.feedContainer}>
          <div className={`${stylesTape.feeds} pr-4`}>
            {orders.map(order => <OrderCard elementLocation={"feed"} orderData={order} key={order._id}/>)}
          </div>
          <div className={"ml-15"}>
            <OrdersStatus listComplete={listComplete} listInWork={listInWork}/>
            <OrdersAllCompleted title={"Выполнено за все время:"} count={total} className={"mt-15"} key={"all-completed"}/>
            <OrdersAllCompleted title={"Выполнено за сегодня:"} count={totalToday} className={"mt-15"} key={"today-completed"}/>
          </div>
        </div>
          <Outlet />
      </div>
      :
      <PreLoader/>
  );
};

export default PageTape;
