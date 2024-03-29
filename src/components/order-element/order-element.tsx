import React, {FC} from 'react';
import styles from './order-element.module.css'
import currencyIcon from '../../images/icon/currency-icon.svg'
import {IIngredient} from "../../interfaces/data/i-ingredient";

interface IOrderElement {
    ingredient: IIngredient
    count: number,
}
const OrderElement:FC<IOrderElement> = ({ingredient, count}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <img src={ingredient.image} alt="ингредиент" className={styles.image}/>
            </div>
            <p className={`${styles.title} text text_type_main-small text_color_primary ml-4`}>{ingredient.name}</p>
            <p className={'text text_type_main-small text_color_primary ml-4'}>{count} x {ingredient.price}</p>
            <img className={`${styles.priceIcon} ml-2`} src={currencyIcon} alt="Валюта"/>
        </div>
    );
};

export default OrderElement;
