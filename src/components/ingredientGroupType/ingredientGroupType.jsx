import React from 'react';
import {DragIcon, ConstructorElement,} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import styleIconIngredient from '../ingredientGroupType/IngredientGroupType.module.css';

export const IngredientGroupType = (props) => {
    return (
        <div className={`${styleIconIngredient.container} mr-2`}>
            <div className={`${styleIconIngredient.icon} mr-2`}>
                <DragIcon type="primary"/>
            </div>
            <ConstructorElement
                text={props.name}
                price={props.price}
                thumbnail={props.image}
            />
        </div>
    );
};

IngredientGroupType.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
}


