import React, {useCallback, useEffect, useState} from 'react';
import styleProfileHistoryOrders from './ProfileHistoryOrders.module.css';
import OrderCard from "../OrderCard/OrderCard";
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import useToken from "../../hooks/useToken";
import {wsUserOrderSelectorModified} from "../../services/selectors/wsUserOrdersSelector";
import {wsOrdersUserConnectAction, wsOrdersUserDisconnectAction} from "../../services/actions/wsUserOrdersAction";
import {WS_CONFIG} from "../../Api/Api";
import {ingredientsThunk} from "../../services/thunks/ingredientsThunk";
import Modal from "../Modal/Modal";
import OrderData from "../OrderData/OrderData";
import {ingredientsSelectorModified} from "../../services/selectors/ingredientsSelectors";

const ProfileHistoryOrders = ({extraClass, pageProfile = true}) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const token = useToken()
    const ingredients = useSelector(ingredientsSelectorModified)
    const navigate = useNavigate()
    const orders = useSelector(wsUserOrderSelectorModified)
    const [orderModalState, setOrderModalState] = useState(location.state?.from === 'profile')

    const closeModal = useCallback(() => {
        setOrderModalState(false)
        navigate("/profile/orders")
    }, [navigate])

    useEffect(() => {
        !ingredients.length && dispatch(ingredientsThunk())
    }, [ingredients])

    useEffect(() => {
        dispatch(wsOrdersUserConnectAction(WS_CONFIG.userUrl(token.getToken().split(" ")[1])))

        return () => {
            dispatch(wsOrdersUserDisconnectAction())
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div
            className={`${styleProfileHistoryOrders.feed} ${extraClass} ${pageProfile && styleProfileHistoryOrders.feedExtra}`}>
            {orders.map(order => <OrderCard extraClass={'extraClass'} pageProfile={true} elementLocation={"profile"}
                                            orderData={order} key={order._id}/>)}
            {orderModalState && orders.length &&
                <Modal setOpen={closeModal}>
                    <div className={"mt-15 mb-15"}>
                        <OrderData orderData={orders.find(order => order._id === location.state.order._id)}/>
                    </div>
                </Modal>
            }
            <Outlet/>
        </div>
    );
};

export default ProfileHistoryOrders;
