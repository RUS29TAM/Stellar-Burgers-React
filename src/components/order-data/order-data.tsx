import React, {FC, useMemo} from 'react';
import styles from './order-data.module.css'
import {useIngredientsData} from "../../hooks/use-ingredients-data";
import {useDataCount} from "../../hooks/use-data-count";
import OrderElement from "../order-element/order-element";
import {getDate, getStatus} from "../../utils/get-status/get-status";
import currencyIcon from '../../images/icon/currency-icon.svg'
import {IOrderInfo} from "../../interfaces/data/i-orderInfo";
import uniqueArray from "../../utils/unique-array";

interface IOrderData {
    orderData: IOrderInfo,
    extraClass: string,
    isModal: boolean,
}
const OrderData: FC<IOrderData> = ({orderData, extraClass, isModal = true}) => {
    const {getIngredientPrice, getIngredientData} = useIngredientsData()
    const orderIngredients = useMemo(() => orderData.ingredients.map(ingredientId => getIngredientData(ingredientId)), [getIngredientData, orderData])
    const {getCount} = useDataCount(orderIngredients)
    const orderPrice = useMemo(() => orderData.ingredients.reduce((prev, ingredientId) => prev + getIngredientPrice(ingredientId), 0), [getIngredientPrice, orderData])

    return (
        <>
            <div className={`${styles.container}`}>
                <p className={`text text_type_main-default text_color_primary  ${styles.id} ${extraClass} ${!isModal && styles.idCentre}` }>#{orderData.number}</p>
                <p className={`text text_type_main-medium text_color_primary mt-10 ${styles.title}`}>{orderData.name}</p>
                <p className={orderData.status === "done" ? "text text_type_main-small mt-3 text_color_success" : orderData.status === "created" ? "text text_type_main-small mt-3 text_color_primary" : "text text_type_main-small mt-3 text_color_accent"}>{getStatus(orderData.status)}</p>
                <p className={"text text_type_main-medium text_color_primary mt-15"}>Состав:</p>
                <div className={`${styles.ingredientsContainer} mt-6 pr-4`}>
                    {uniqueArray(orderIngredients).map(ingredient => <OrderElement key={ingredient._id}
                                                                                    ingredient={ingredient}
                                                                                    count={getCount(ingredient._id)}/>)}
                </div>
                <div className={`${styles.infoContainer} mt-10`}>
                    <p className={"text text_type_main-small text_color_inactive"}>{getDate(orderData.createdAt)}</p>
                    <div className={styles.price}>
                        <p className={"text text_type_digits-default text_color_primary"}>{orderPrice}</p>
                        <img src={currencyIcon} alt="Валюта" className={styles.priceIcon}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderData;
