import React from 'react';
import PropTypes from "prop-types";
import stylesListBasket from './ListIngredients.module.css'
import {IngredientCard} from '../IngredientCard/IngredientCard';
import {ingredientType} from "../../utils/types";


export const ListIngredients = ({ heading, list }) => {
    return (
        <>
            <h3 className='text text_type_main-medium mt-10 mb-6'>
                {heading}
            </h3>
            <div className={`${stylesListBasket.list} ml-4 mr-2`}>
                {list.map((item) => (
                    <IngredientCard
                        key={item._id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        image_large={item.image_large}
                        calories={item.calories}
                        proteins={item.proteins}
                        fat={item.fat}
                        carbohydrates={item.carbohydrates}
                    />
                ))}
            </div>
        </>
    );
};

ListIngredients.propTypes = {
    heading: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(ingredientType.isRequired)
};

