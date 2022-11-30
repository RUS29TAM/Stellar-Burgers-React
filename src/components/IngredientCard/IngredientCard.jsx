import React, {useState} from 'react';
import styleCard from '../IngredientCard/IngredientCard.module.css'
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

// @ts-ignore
export const IngredientCard = (props) => {
  const {name, price, image, ...otherProps} = props;
  const [isIngredientDetailsPopupOpen, setIngredientDetailsPopupOpen] = useState(false);
  const handleIngredientsPopupOpen = () => setIngredientDetailsPopupOpen(true);

  return (
    <div className={styleCard.card} onClick={handleIngredientsPopupOpen}>
      <img className={`mr-4 ml-4`} src={props.image} alt={props.name}/>
      <div className={`mt-1 mb-1 ${styleCard.price}`}>
        <span className='text text_type_digits-default'>{props.price}</span>
        <CurrencyIcon type="primary"/>
      </div>
      <div className={styleCard.name}>
        <span className='text text_type_main-default'>{props.name}</span>
      </div>
      <Counter count={1} size="default"/>
      <IngredientDetails
        isOpen={isIngredientDetailsPopupOpen}
        setOpen={setIngredientDetailsPopupOpen}
        name={name}
        infoProps={otherProps}/>
    </div>
  );
};
