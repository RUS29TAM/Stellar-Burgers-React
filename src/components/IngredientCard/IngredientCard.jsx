import React, {useState} from 'react';
import styleCard from '../IngredientCard/IngredientCard.module.css'
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import ingredientType from '../../utils/types';
import Modal from "../Modal/Modal";


const IngredientCard = ({ingredient}) => {
  const [isIngredientDetailsPopupOpen, setIngredientDetailsPopupOpen] = useState(false);
  const handleIngredientSetOpen = value => setIngredientDetailsPopupOpen(value)

  const handleIngredientsPopupOpen = () => {
    setIngredientDetailsPopupOpen(true)
  };

  return (
    <div className={styleCard.card} onClick={handleIngredientsPopupOpen}>
      <img className={`mr-4 ml-4`} src={ingredient.image} alt={ingredient.name}/>
      <div className={`mt-1 mb-1 ${styleCard.price}`}>
        <span className='text text_type_digits-default'>{ingredient.price}</span>
        <CurrencyIcon type="primary"/>
      </div>
      <div className={styleCard.name}>
        <span className='text text_type_main-default'>{ingredient.name}</span>
      </div>
      <Counter count={1} size="default"/>
      {isIngredientDetailsPopupOpen &&
      <Modal
        setOpen={handleIngredientSetOpen}
      >
        <IngredientDetails ingredient={ingredient}/>
      </Modal>
      }
    </div>
  );
};


IngredientCard.propTypes = {
  ingredient: ingredientType.isRequired
};

export default IngredientCard
