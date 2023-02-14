import React from 'react';
import PropTypes from 'prop-types';
import stylesListBasket from './ListIngredients.module.css'
import IngredientCard from '../IngredientCard/IngredientCard';
import ingredientType from '../../utils/types';

const ListIngredients = ({heading, list, getIngredientCount}) => {
  return (
    <>
      <h3 className='text text_type_main-medium mt-10 mb-6'>
        {heading}
      </h3>
      <div className={`${stylesListBasket.list} ml-4 mr-2`}>
        {list.map((item) => (
          <IngredientCard getIngredientCount={getIngredientCount} key={item._id} ingredient={item}/>
        ))}
      </div>
    </>
  );
};

ListIngredients.propTypes = {
  heading: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(ingredientType.isRequired),
  getIngredientCount: PropTypes.func.isRequired,
};

export default ListIngredients

