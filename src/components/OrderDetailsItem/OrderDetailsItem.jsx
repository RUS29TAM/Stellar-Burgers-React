import React from 'react';
import styles from './OrderDetailsItem.module.css'
import currencyIcon from '../../images/icon/currency-icon.svg'

const OrderDetailsItem = ({ingredient,count}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={ingredient.image} alt="ингредиент" className={styles.image}/>
      </div>
      <p className={`${styles.title} text text_type_main-small text_color_primary ml-4`}>{ingredient.name}</p>
      <p className={'text text_type_main-small text_color_primary ml-4'}>{count} x {ingredient.price}</p>
      <img className={`${styles.priceIcon} ml-2`} src={currencyIcon} alt="Валюта"/>
    </div>
  );
};

export default OrderDetailsItem;
