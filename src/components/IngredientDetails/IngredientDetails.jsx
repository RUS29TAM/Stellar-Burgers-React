import React from 'react';
import styleIngredientDetails from '../IngredientDetails/IngredientDetails.module.css';
import {Modal} from '../Modal/Modal';
import PropTypes from 'prop-types';

export const IngredientDetails = (props) => {
const {
  name, infoProps: { proteins, fat, carbohydrates, calories, image_large, }, ...modalProps} = props;
    return (
      <Modal {...modalProps}>
        <div className={`pt-10 pr-10 pb-15 pl-10 ${styleIngredientDetails.wrapper}`}>
          <h1 className={`text text_type_main-large ${styleIngredientDetails.heading}`}>Детали ингридиета</h1>
          <img className='mb-4' src={image_large} alt={name}/>
          <div className={`text_color_inactive ${styleIngredientDetails.extraInfoBlock}`}>
            <div className={styleIngredientDetails.extraInfo}>
              <p className='text text_type_main-default'>Калории,&nbsp;ккал</p>
              <p className='text text_type_digits-default'>{calories}</p>
            </div>
            <div className={styleIngredientDetails.extraInfo}>
              <p className='text text_type_main-default'>Белки,&nbsp;г</p>
              <p className='text text_type_digits-default'>{proteins}</p>
            </div>
            <div className={styleIngredientDetails.extraInfo}>
              <p className='text text_type_main-default'>Жиры,&nbsp;г</p>
              <p className='text text_type_digits-default'>{fat}</p>
            </div>
            <div className={styleIngredientDetails.extraInfo}>
              <p className='text text_type_main-default'>Углеводы,&nbsp;г</p>
              <p className='text text_type_digits-default'>{carbohydrates}</p>
            </div>
          </div>
        </div>
      </Modal>
    );
};

IngredientDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image_large: PropTypes.string,
  calories: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
};

