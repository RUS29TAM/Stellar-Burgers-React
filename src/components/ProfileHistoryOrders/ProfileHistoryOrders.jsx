import React, {useCallback, useEffect, useState} from 'react';
import styleProfileHistoryOrders from './ProfileHistoryOrders.module.css';
import OrderCard from "../OrderCard/OrderCard";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import useToken from "../../hooks/useToken";
import {wsUserOrderSelectorModified} from "../../services/selectors/wsUserOrdersSelector";
import {wsOrdersUserConnectAction, wsOrdersUserDisconnectAction} from "../../services/actions/wsUserOrdersAction";
import {WS_CONFIG} from "../../Api/Api";
import {ingredientsThunk} from "../../services/thunks/ingredientsThunk";
import Modal from "../Modal/Modal";
import OrderData from "../OrderData/OrderData";


const ProfileHistoryOrders = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const token = useToken()
  const ingredients = useSelector(state => state.ingredients)
  const navigate = useNavigate()
  const orders = useSelector(wsUserOrderSelectorModified)
  const [orderInfoModalState, setOrderInfoModalState] = useState(location.state?.from === 'profile')

  const handleCloseInfoModal = useCallback(() => {
    setOrderInfoModalState(false)
    navigate("/profile/orders")
  },[navigate])

  // eslint-disable-next-line
  useEffect(() => {!ingredients.length && dispatch(ingredientsThunk())},[ingredients])

  useEffect(() => {
    dispatch(wsOrdersUserConnectAction(WS_CONFIG.userUrl(token.getToken().split(" ")[1])))

    return () => {
      dispatch(wsOrdersUserDisconnectAction())
    }
    // eslint-disable-next-line
  },[])
  return (
    <div className={styleProfileHistoryOrders.feed + " pr-4"}>
      {orders.map(order => <OrderCard elementPosition={"profile"} orderInfo={order} key={order._id}/>)}
      {orderInfoModalState && orders.length &&
        <Modal handleClose={handleCloseInfoModal}>
          <div className={"mt-15 mb-15"}>
            <OrderData orderInfo={orders.find(order => order._id === location.state.order._id)}/>
          </div>
        </Modal>
      }
    </div>

  );
};

export default ProfileHistoryOrders;
