import React from 'react';
import styleCard from '../IngredientCard/IngredientCard.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

// @ts-ignore
export const IngredientCard = (props) => {
    return (
        <div className={styleCard.card}>
            <img className={`mr-4 ml-4`} src={props.image} alt={props.name}  />
            <div className={`mt-1 mb-1 ${styleCard.price}`}>
                <span className='text text_type_digits-default'>{props.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <div className={styleCard.name}>
                <span className='text text_type_main-default'>{props.name}</span>
            </div>
            <Counter count={1} size="default" />
        </div>
    );
};