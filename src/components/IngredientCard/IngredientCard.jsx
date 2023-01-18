import React, {useState} from 'react';
import styleCard from '../IngredientCard/IngredientCard.module.css'
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import ingredientType from '../../utils/types';
import Modal from "../Modal/Modal";
import {useDrag} from "react-dnd";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {SET_INGREDIENT} from "../../services/actions/ingredientDetails";


const IngredientCard = ({ingredient, getIngredientCount}) => {
  const [isIngredientDetailsPopupOpen, setIngredientDetailsPopupOpen] = useState(false);
  const handleIngredientSetOpen = value => setIngredientDetailsPopupOpen(value)

  const [, dragRef] = useDrag({
    type: 'ingredientCard',
    item: ingredient,
  });

  const dispatch = useDispatch()
  const ingredientDetails = useSelector(state => state.ingredientDetails.ingredient)

  const handleIngredientsPopupOpen = () => {
    dispatch({type: SET_INGREDIENT, payload: ingredient})
    setIngredientDetailsPopupOpen(true)
  };

  return (
    <div ref={dragRef} className={styleCard.card} onClick={handleIngredientsPopupOpen}>
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
        ({isIngredientDetailsPopupOpen && ingredientDetails &&
        <Modal
          setOpen={handleIngredientSetOpen}
        >
          <IngredientDetails/>
        </Modal>
      })
      </span>
    </div>
  );
};

IngredientCard.propTypes = {
  ingredient: ingredientType.isRequired,
  getIngredientCount: PropTypes.func.isRequired,
};

export default IngredientCard
