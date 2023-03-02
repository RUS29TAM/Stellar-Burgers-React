import React, {useCallback, useMemo} from 'react';
import styleOrderCard from "./OrderCard.module.css";
import {useIngredientsData} from "../../hooks/useIngredientsData";
import {Link} from "react-router-dom";
import {getDate, getStatus} from "../../utils/getStatus";
import currencyIcon from '../../images/icon/currency-icon.svg'
import PropTypes from "prop-types";
import {orderInfoType} from "../../utils/orderInfoTypes";

const OrderCard = ({elementLocation ,orderData}) => {
  const ingredientsData = useIngredientsData()
  const price = useMemo(() => orderData.ingredients.reduce((a,ingredientId) => ingredientId ? a + ingredientsData.getIngredientPrice(ingredientId) : a,0),[ingredientsData, orderData])

  const getLink = useCallback((linkPos) => linkPos === "feed" ? `/feed/${orderData._id}` : `/profile/orders/${orderData._id}`,[orderData])

  return (
    <Link to={getLink(elementLocation)} className={styleOrderCard.link} state={{from: elementLocation,order: orderData}}>

      <div className={`pt-6 pb-6 pl-6 pr-6 ${styleOrderCard.card}`}>
        <div className={styleOrderCard.info}>
          <p className={"text text_type_main-default text_color_primary"}>#{orderData.number}</p>
          <p className={"text text_type_main-default text_color_inactive"}>{getDate(orderData.createdAt)}</p>
        </div>
        <p className={`text text_type_main-medium text_color_primary mt-6 ${styleOrderCard.title}`}>{orderData.name}</p>
        {orderData.status && <p className={orderData.status === "done" ? "text text_type_main-small mt-2 text_color_success" : orderData.status === "created" ? "text text_type_main-small mt-2 text_color_primary" :  "text text_type_main-small mt-2 text_color_accent"}>{getStatus(orderData.status)}</p>}
        <div className={`${styleOrderCard.info} mt-6`}>
          <div className={styleOrderCard.ingredientsContainer}>
            {
              orderData.ingredients.slice(0,6)
                .map((ingredientId,index) => ingredientId && <div className={styleOrderCard.ingredientImageContainer} data-count={`+${orderData.ingredients.slice(6).length}`} key={`${orderData._id}-${index}-${ingredientId}`}><img src={ingredientsData.getIngredientImage(ingredientId)} className={styleOrderCard.ingredientImage} alt={"ингредиент"}/></div>)
            }
          </div>
          <div className={styleOrderCard.price}>
            <p className={"text text_type_main-default text_color_primary"}>{price}</p>
            <img src={currencyIcon} alt="Валюта" className={styleOrderCard.priceIcon}/>
          </div>
        </div>
      </div>
    </Link>
  );
};

OrderCard.propTypes = {
  elementLocation: PropTypes.oneOf(["feed","profile"]).isRequired,
    orderData: orderInfoType.isRequired,
}

export default OrderCard;
