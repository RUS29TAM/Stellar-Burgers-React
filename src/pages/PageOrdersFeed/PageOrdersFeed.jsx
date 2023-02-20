import React, {useEffect} from 'react';
import OrdersList from "../../components/OrdersList/OrdersList";
import OrdersStatus from "../../components/OrdersStatus/OrdersStatus";
import stylePageOrdersFeed from './PageOrdersFeed.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import useToken from "../../hooks/useToken";
import {wsOrdersFeedReducerSelectorModified} from "../../services/selectors/wsOrdersFeedSelector";
import {ingredientsThunk} from "../../services/thunks/ingredientsThunk";
import {wsOrdersFeedDisconnectAction, wsOrdersFeedsConnectAction} from "../../services/actions/wsOrdersFeedsAction";
import {WS_CONFIG} from "../../Api/Api";

const PageOrdersFeed = () => {

  const dispatch = useDispatch()
  const location = useLocation()
  const {id} = useParams()
  const token = useToken()
  const ingredients = useSelector(state => state.ingredients)
  const orders = location.pathname.includes('feed') ? wsOrdersFeedReducerSelectorModified : ''



  useEffect(() => {
    if (!ingredients.length) dispatch(ingredientsThunk())
  }, [ingredients, dispatch])

  useEffect(() => {
    if (!orders.length) {
      if (location.pathname.includes('feed')) {
        dispatch(wsOrdersFeedsConnectAction(WS_CONFIG.feedsUrl))
      }
      else {
        dispatch(wsOrdersFeedsConnectAction(WS_CONFIG.userUrl(token.getToken().replace('Bearer', ''))))
      }
      if(location.pathname.includes('feed')) {
        return () => dispatch(wsOrdersFeedDisconnectAction())
      }
    }
  }, [orders, location, dispatch, token])

  return (location.state?.from === 'feed' ?
    <div className={stylePageOrdersFeed.wrapper}>
      <h1 className={`text text_type_main-large`}>Лента заказов</h1>
      <div className={stylePageOrdersFeed.container}>
        <OrdersList/>

        <OrdersStatus/>
      </div>
    </div> : ''
  );
};

export default PageOrdersFeed;
