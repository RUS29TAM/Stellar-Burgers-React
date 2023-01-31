import React from 'react';
import styleCard from '../IngredientCard/IngredientCard.module.css';
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientType from '../../utils/types';
import {useDrag} from "react-dnd";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const IngredientCard = ({ingredient, getIngredientCount}) => {
  const [, dragRef] = useDrag({
    type: 'ingredientCard',
    item: ingredient,
  });

  return (
    <div ref={dragRef} className={styleCard.card}>
      <Link to={`/ingredients/${ingredient._id}`} className={"text_color_primary"} replace={true}
            state={{ingredient: ingredient, from: '/', stateModal: true}}>
      <span className={styleCard.span}>
      <img className={`mr-4 ml-4`} src={ingredient.image} alt={ingredient.name}/>
      <div className={`mt-1 mb-1 ${styleCard.price}`}>
        <span className='text text_type_digits-default'>{ingredient.price}</span>
        <CurrencyIcon type="primary"/>
      </div>
      <div className={styleCard.name}>
        <span className='text text_type_main-default'>{ingredient.name}</span>
      </div>
        ({getIngredientCount(ingredient._id) !== 0 &&
        <Counter count={getIngredientCount(ingredient._id)} size="default"/>})
      </span>
      </Link>
    </div>
  );
};

IngredientCard.propTypes = {
  ingredient: ingredientType.isRequired,
  getIngredientCount: PropTypes.func.isRequired,
};

export default IngredientCard
