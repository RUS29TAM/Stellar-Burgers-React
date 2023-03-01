import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import useToken from "../../hooks/useToken";
import {ingredientsThunk} from "../../services/thunks/ingredientsThunk";
import {wsOrdersFeedDisconnectAction, wsOrdersFeedsConnectAction} from "../../services/actions/wsOrdersFeedsAction";
import {WS_CONFIG} from "../../Api/Api";
import PageTape from "../PageTape/PageTape";
import PageProfile from "../PageProfile/PageProfile";
import PreLoader from "../../components/PreLoader/PreLoader";
import OrderData from "../../components/OrderData/OrderData";
import {ingredientsSelectorModified} from "../../services/selectors/ingredientsSelectors";
import {wsOrdersFeedSelectorModified} from "../../services/selectors/wsOrdersFeedSelector";
import {wsUserOrderSelectorModified} from "../../services/selectors/wsUserOrdersSelector";
import {wsOrdersUserConnectAction, wsOrdersUserDisconnectAction} from "../../services/actions/wsUserOrdersAction";

const PageOrdersFeed = () => {

  const dispatch = useDispatch()
  const location = useLocation()
  const {id} = useParams()
  const token = useToken()
  const ingredients = useSelector(ingredientsSelectorModified)
  const orders = useSelector(location.pathname.includes('feed') ? wsOrdersFeedSelectorModified : wsUserOrderSelectorModified)

  const order = location.state?.order || orders.find(order => order._id === id)

  useEffect(() => {
    if (!ingredients.length) dispatch(ingredientsThunk())
  }, [ingredients, dispatch])

  useEffect(() => {
    if (!orders.length) {
      if (location.pathname.includes('feed')) {
        dispatch(wsOrdersFeedsConnectAction(WS_CONFIG.feedsUrl))
      } else {
        dispatch(wsOrdersUserConnectAction(WS_CONFIG.userUrl(token.getToken().replace('Bearer ', ''))))
      }

      if (location.pathname.includes('feed')) {
        return () => dispatch(wsOrdersFeedDisconnectAction())
      } else {
        return () => dispatch(wsOrdersUserDisconnectAction())
      }
    }
  }, [orders, location, dispatch, token])

  return (
      // location.state?.from === 'feed'
      // ?
      // <PageTape/>
      // :
      // location.state?.from === "profile"
      //   ?
      //   <PageProfile/>
      //   :
        order
          ?
          <div className={"mt-10"}>
            <OrderData orderInfo={order}/>
          </div>
          :
          <PreLoader/>
  );
};

export default PageOrdersFeed;
