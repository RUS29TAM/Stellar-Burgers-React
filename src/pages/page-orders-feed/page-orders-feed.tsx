import React, {useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";
import useToken from "../../hooks/use-token";
import {wsOrdersFeedDisconnectAction, wsOrdersFeedsConnectAction} from "../../services/actions/ws-orders-feeds-action";
import {WS_CONFIG} from "../../api/api";
import PreLoader from "../../components/pre-loader/pre-loader";
import OrderData from "../../components/order-data/order-data";
import {wsOrdersFeedSelectorModified} from "../../services/selectors/ws-orders-feed-selector";
import {wsUserOrderSelectorModified} from "../../services/selectors/ws-user-orders-selector";
import {wsOrdersUserConnectAction, wsOrdersUserDisconnectAction} from "../../services/actions/ws-user-orders-action";
import {AppSelector} from "../../hooks/app-selector";
import {AppDispatch} from "../../hooks/app-dispatch";
import {IOrderInfo} from "../../interfaces/data/i-orderInfo";

const PageOrdersFeed = () => {

    const dispatch = AppDispatch()
    const location = useLocation()
    const {id} = useParams()
    const token = useToken()
    const orders = AppSelector(location.pathname.includes('feed') ? wsOrdersFeedSelectorModified : wsUserOrderSelectorModified)
    const order = location.state?.order || orders.find((order: IOrderInfo) => order._id === id)

    // @ts-ignore
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
        order
            ?
            <div className={"pt-30"}>
                <OrderData extraClass={'extraClass'} isModal={false} orderData={order}/>
            </div>
            :
            <PreLoader/>
    );
};

export default PageOrdersFeed;
