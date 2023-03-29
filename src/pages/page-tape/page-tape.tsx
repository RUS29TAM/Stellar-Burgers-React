import React, {useEffect, useMemo} from 'react';
import stylesTape from './page-tape.module.css';
import OrdersStatus from "../../components/orders-status/orders-status";
import OrdersAllCompleted from "../../components/orders-all-completed/orders-all-completed";
import PreLoader from "../../components/pre-loader/pre-loader";
import {Outlet} from "react-router-dom";
import {wsOrdersFeedReducerSelectorModified} from "../../services/selectors/ws-orders-feed-selector";
import OrderCard from "../../components/order-card/order-card";
import {ingredientsSelectorModified} from "../../services/selectors/ingredients-selectors";
import {wsOrdersFeedDisconnectAction, wsOrdersFeedsConnectAction} from "../../services/actions/ws-orders-feeds-action";
import {WS_CONFIG} from "../../api/api";
import {AppDispatch} from "../../hooks/app-dispatch";
import {AppSelector} from "../../hooks/app-selector";
import {IOrderInfo} from "../../interfaces/data/i-orderInfo";

const PageTape = () => {
    const dispatch = AppDispatch()
    const ingredients = AppSelector(ingredientsSelectorModified)
    const {total, totalToday, orders} = AppSelector(wsOrdersFeedReducerSelectorModified)

    const {listComplete, listInWork} = useMemo(() => orders.reduce((previous: {listComplete: [], listInWork: []}, order: IOrderInfo) =>
            order.status === "done"
                ?
                {...previous, listComplete: [...previous.listComplete, order.number]}
                :
                {...previous, listInWork: [...previous.listInWork, order.number]}, {listComplete: [], listInWork: []}),

        [orders])

    useEffect(() => {
        dispatch(wsOrdersFeedsConnectAction(WS_CONFIG.feedsUrl))
        return () => {
            dispatch(wsOrdersFeedDisconnectAction())
        }

    }, [])

    return (
        ingredients.length && orders.length
            ?
            <div className={stylesTape.content}>
                <h2 className={` text text_type_main-large text_color_primary mb-5 ${stylesTape.title}`}>Лента
                    заказов</h2>
                <div className={stylesTape.feedContainer}>
                    <div className={`${stylesTape.feeds} pr-4`}>
                        {orders.map((order: IOrderInfo) => <OrderCard ispageprofile={false} extraClass={''} elementLocation={"feed"} orderData={order} key={order._id}/>)}
                    </div>
                    <div className={"ml-15"}>
                        <OrdersStatus listComplete={listComplete} listInWork={listInWork}/>
                        <OrdersAllCompleted title={"Выполнено за все время:"} count={total} className={"mt-15"}
                                            key={"all-completed"}/>
                        <OrdersAllCompleted title={"Выполнено за сегодня:"} count={totalToday} className={"mt-15"}
                                            key={"today-completed"}/>
                    </div>
                </div>
                <Outlet/>
            </div>
            :
            <PreLoader/>
    );
};

export default PageTape;
