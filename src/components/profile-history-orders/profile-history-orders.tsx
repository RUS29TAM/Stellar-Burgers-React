import React, {FC, useEffect} from 'react';
import styleProfileHistoryOrders from './profile-history-orders.module.css';
import OrderCard from "../order-card/order-card";
import {Outlet} from "react-router-dom";
import useToken from "../../hooks/use-token";
import {wsUserOrderSelectorModified} from "../../services/selectors/ws-user-orders-selector";
import {wsOrdersUserConnectAction, wsOrdersUserDisconnectAction} from "../../services/actions/ws-user-orders-action";
import {WS_CONFIG} from "../../api/api";
import {ingredientsSelectorModified} from "../../services/selectors/ingredients-selectors";
import {AppDispatch} from "../../hooks/app-dispatch";
import {AppSelector} from "../../hooks/app-selector";

interface IProfileHistoryOrders {
    extraClass: string,
    ispageprofile: boolean,
}
const ProfileHistoryOrders: FC<IProfileHistoryOrders> = ({extraClass, ispageprofile = true}) => {
    const dispatch = AppDispatch()
    const token = useToken()
    const ingredients = AppSelector(ingredientsSelectorModified)
    const orders = AppSelector(wsUserOrderSelectorModified)

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
            {orders.map(order => <OrderCard extraClass={'extraClass'} ispageprofile={true} elementLocation={"profile"}
                                            orderData={order} key={order._id}/>)}
            {ingredients.length && <Outlet/>}
        </div>
    );
};

export default ProfileHistoryOrders;
