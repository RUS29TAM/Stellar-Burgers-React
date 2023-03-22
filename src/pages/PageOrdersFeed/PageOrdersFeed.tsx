import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import useToken from "../../hooks/useToken";
import {wsOrdersFeedDisconnectAction, wsOrdersFeedsConnectAction} from "../../services/actions/wsOrdersFeedsAction";
import {WS_CONFIG} from "../../Api/Api";
import PreLoader from "../../components/PreLoader/PreLoader";
import OrderData from "../../components/OrderData/OrderData";
import {ingredientsSelectorModified} from "../../services/selectors/ingredientsSelectors";
import {wsOrdersFeedSelectorModified} from "../../services/selectors/wsOrdersFeedSelector";
import {wsUserOrderSelectorModified} from "../../services/selectors/wsUserOrdersSelector";
import {wsOrdersUserConnectAction, wsOrdersUserDisconnectAction} from "../../services/actions/wsUserOrdersAction";
import {AppSelector} from "../../hooks/appSelector";

const PageOrdersFeed = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const {id} = useParams()
    const token = useToken()
    const ingredients = AppSelector(ingredientsSelectorModified)
    const orders = AppSelector(location.pathname.includes('feed') ? wsOrdersFeedSelectorModified : wsUserOrderSelectorModified)
    const order = location.state?.order || orders.find(order => order._id === id)

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
