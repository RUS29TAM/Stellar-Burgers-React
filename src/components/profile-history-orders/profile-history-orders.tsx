import React, {FC, useEffect} from 'react';
import styleProfileHistoryOrders from './profile-history-orders.module.css';
import OrderCard from "../order-card/order-card";
import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import useToken from "../../hooks/useToken";
import {wsUserOrderSelectorModified} from "../../services/selectors/wsUserOrdersSelector";
import {wsOrdersUserConnectAction, wsOrdersUserDisconnectAction} from "../../services/actions/wsUserOrdersAction";
import {WS_CONFIG} from "../../api/api";
import {ingredientsSelectorModified} from "../../services/selectors/ingredientsSelectors";
import {AppDispatch} from "../../hooks/appDispatch";

interface IProfileHistoryOrders {
    extraClass: string,
    ispageprofile: boolean,
}
const ProfileHistoryOrders: FC<IProfileHistoryOrders> = ({extraClass, ispageprofile = true}) => {
    const dispatch = AppDispatch()
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
            {orders.map(order => <OrderCard extraClass={'extraClass'} ispageprofile={true} elementLocation={"profile"}
                                            orderData={order} key={order._id}/>)}
            {ingredients.length && <Outlet/>}
        </div>
    );
};

ProfileHistoryOrders.propTypes = {

}

export default ProfileHistoryOrders;
