import React, {useEffect} from 'react';
import styleProfileHistoryOrders from './ProfileHistoryOrders.module.css';
import OrderCard from "../OrderCard/OrderCard";
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import useToken from "../../hooks/useToken";
import {wsUserOrderSelectorModified} from "../../services/selectors/wsUserOrdersSelector";
import {wsOrdersUserConnectAction, wsOrdersUserDisconnectAction} from "../../services/actions/wsUserOrdersAction";
import {WS_CONFIG} from "../../Api/Api";
import {ingredientsSelectorModified} from "../../services/selectors/ingredientsSelectors";
import PropTypes from "prop-types";

const ProfileHistoryOrders = ({extraClass, ispageprofile = true}) => {
    const dispatch = useDispatch()
    const token = useToken()
    const ingredients = useSelector(ingredientsSelectorModified)
    const orders = useSelector(wsUserOrderSelectorModified)

    useEffect(() => {
        dispatch(wsOrdersUserConnectAction(WS_CONFIG.userUrl(token.getToken().split(" ")[1])))

        return () => {
            dispatch(wsOrdersUserDisconnectAction())
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div
            className={`${styleProfileHistoryOrders.feed} ${extraClass} ${ispageprofile && styleProfileHistoryOrders.feedExtra}`}>
            {orders.map(order => <OrderCard extraclass={'extraClass'} ispageprofile={true} elementLocation={"profile"}
                                            orderData={order} key={order._id}/>)}
            {ingredients.length && <Outlet/>}
        </div>
    );
};

ProfileHistoryOrders.propTypes = {
    extraClass: PropTypes.string,
    ispageprofile: PropTypes.bool,
}

export default ProfileHistoryOrders;
