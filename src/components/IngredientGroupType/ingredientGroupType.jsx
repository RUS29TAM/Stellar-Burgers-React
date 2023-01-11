import React from 'react';
import {DragIcon, ConstructorElement,} from '@ya.praktikum/react-developer-burger-ui-components';
import styleIconIngredient from './IngredientGroupType.module.css';
import ingredientType from '../../utils/types';

const IngredientGroupType = ({ingredient}) => {
  return (
    <div className={`${styleIconIngredient.container} mr-2`}>
      <div className={`${styleIconIngredient.icon} mr-2`}>
        <DragIcon type="primary"/>
      </div>
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
      />
    </div>
  );
};

IngredientGroupType.propTypes = {
  ingredient: ingredientType.isRequired
};




