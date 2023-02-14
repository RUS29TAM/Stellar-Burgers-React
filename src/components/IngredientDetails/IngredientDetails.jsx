import React from 'react';
import styleIngredientDetails from '../IngredientDetails/IngredientDetails.module.css';
import {useSelector} from "react-redux";
import PropTypes from "prop-types";

const IngredientDetails = ({extraClass, isModal = true}) => {
  const ingredient = useSelector(state => state.ingredientDetails.ingredient)

  return (
    <div className={`pt-10 pr-10 pb-10 pl-10 ${styleIngredientDetails.wrapper}`}>
      <h1
        className={`text text_type_main-large pt-2 ${styleIngredientDetails.heading} ${extraClass} ${!isModal && styleIngredientDetails.textCentre}`}>Детали
        ингредиента</h1>
      <img className={`m-4 ${styleIngredientDetails.imageLarge}`} src={ingredient.image_large} alt={ingredient.name}/>
      <p className={`text text_type_main-medium ${styleIngredientDetails.name}`}>{ingredient.name}</p>
      <div className={`text_color_inactive p-3 ${styleIngredientDetails.extraInfoBlock}`}>
        <div className={`p-4 ${styleIngredientDetails.extraInfo}`}>
          <p
            className={`text text_type_main-default pb-2 ${styleIngredientDetails.extraInfoWrapper}`}>Калории,&nbsp;ккал</p>
          <p className='text text_type_digits-default'>{ingredient.calories}</p>
        </div>
        <div className={`p-4 ${styleIngredientDetails.extraInfo}`}>
          <p className={`text text_type_main-default pb-2 ${styleIngredientDetails.extraInfoWrapper}`}>Белки,&nbsp;г</p>
          <p className='text text_type_digits-default'>{ingredient.proteins}</p>
        </div>
        <div className={`p-4 ${styleIngredientDetails.extraInfo}`}>
          <p className={`text text_type_main-default pb-2 ${styleIngredientDetails.extraInfoWrapper}`}>Жиры,&nbsp;г</p>
          <p className='text text_type_digits-default'>{ingredient.fat}</p>
        </div>
        <div className={`p-4 ${styleIngredientDetails.extraInfo}`}>
          <p
            className={`text text_type_main-default pb-2 ${styleIngredientDetails.extraInfoWrapper}`}>Углеводы,&nbsp;г</p>
          <p className='text text_type_digits-default'>{ingredient.carbohydrates}</p>
        </div>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  extraClass: PropTypes.string.isRequired,
  isModal: PropTypes.bool,
}

export default IngredientDetails
