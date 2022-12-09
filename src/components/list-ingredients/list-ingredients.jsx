import React from 'react';
import PropTypes from 'prop-types';
import stylesListBasket from './list-ingredients.module.css'
import IngredientCard from '../ingredient-card/ingredient-card';
import ingredientType from '../../utils/types';


const ListIngredients = ({heading, list}) => {
  return (
    <>
      <h3 className='text text_type_main-medium mt-10 mb-6'>
        {heading}
      </h3>
      <div className={`${stylesListBasket.list} ml-4 mr-2`}>
        {list.map((item) => (
          <IngredientCard key={item._id} ingredient={item}/>
        ))}
      </div>
    </>
  );
};

ListIngredients.propTypes = {
  heading: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(ingredientType.isRequired)
};

export default ListIngredients

