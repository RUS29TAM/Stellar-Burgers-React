import React, {useMemo} from 'react';
import styles from './OrderData.module.css'
import {useIngredientsData} from "../../hooks/useIngredientsData";
import {useIngredientsCountData} from "../../hooks/useIngredientsCountData";
import OrderDetailsItem from "../OrderDetailsItem/OrderDetailsItem";
import {getDate, getStatus} from "../../utils/getStatus";
import currencyIcon from '../../images/icon/currency-icon.svg'
import PropTypes from "prop-types";

const OrderData = ({orderInfo}) => {
  const {getIngredientPrice,getIngredientData} = useIngredientsData()
  const orderIngredients = useMemo(() => orderInfo.ingredients.map(ingredientId => getIngredientData(ingredientId)),[getIngredientData, orderInfo])
  const {getIngredientCount} = useIngredientsCountData(orderIngredients)
  const orderPrice = useMemo(() => orderInfo.ingredients.reduce((prev,ingredientId) => prev + getIngredientPrice(ingredientId),0),[getIngredientPrice,orderInfo])

  return (
    <div className={`${styles.container}`}>
      <p className={`text text_type_main-default text_color_primary ${styles.id}`}>#{orderInfo.number}</p>
      <p className={`text text_type_main-medium text_color_primary mt-10 ${styles.title}`}>{orderInfo.name}</p>
      <p className={orderInfo.status === "done" ? "text text_type_main-small mt-3 text_color_success" : orderInfo.status === "created" ? "text text_type_main-small mt-3 text_color_primary" : "text text_type_main-small mt-3 text_color_accent"}>{getStatus(orderInfo.status)}</p>
      <p className={"text text_type_main-medium text_color_primary mt-15"}>Состав:</p>
      <div className={`${styles.ingredientsContainer} mt-6 pr-4`}>
        {[...new Set(orderIngredients)].map(ingredient => <OrderDetailsItem key={ingredient._id} ingredient={ingredient} count={getIngredientCount(ingredient._id)}/>)}
      </div>
      <div className={`${styles.infoContainer} mt-10`}>
        <p className={"text text_type_main-small text_color_inactive"}>{getDate(orderInfo.createdAt)}</p>
        <div className={styles.price}>
          <p className={"text text_type_digits-default text_color_primary"}>{orderPrice}</p>
          <img src={currencyIcon} alt="Иконка денег" className={styles.priceIcon}/>
        </div>
      </div>
    </div>
  );
};

OrderData.propTypes = {
  createdAt: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string.isRequired),
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
}

export default OrderData;
