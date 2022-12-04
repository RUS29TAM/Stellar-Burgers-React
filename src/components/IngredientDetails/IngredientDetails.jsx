import React from 'react';
import styleIngredientDetails from '../IngredientDetails/IngredientDetails.module.css';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

const IngredientDetails = (props) => {
  const {
    name, infoProps: {proteins, fat, carbohydrates, calories, image_large,}, ...modalProps
  } = props;
  return (
    <Modal {...modalProps}>
      <div className={`pt-10 pr-10 pb-10 pl-10 ${styleIngredientDetails.wrapper}`}>
        <h1 className={`text text_type_main-large pt-2 ${styleIngredientDetails.heading}`}>Детали ингридиета</h1>
        <img className={`m-4 ${styleIngredientDetails.imageLarge}`} src={image_large} alt={name}/>
        <p className={`text text_type_main-medium ${styleIngredientDetails.name}`}>{name}</p>
        <div className={`text_color_inactive p-3 ${styleIngredientDetails.extraInfoBlock}`}>
          <div className={`p-4 ${styleIngredientDetails.extraInfo}`}>
            <p className={`text text_type_main-default pb-2 ${styleIngredientDetails.extraInfoWrapper}`}>Калории,&nbsp;ккал</p>
            <p className='text text_type_digits-default'>{calories}</p>
          </div>
          <div className={`p-4 ${styleIngredientDetails.extraInfo}`}>
            <p className={`text text_type_main-default pb-2 ${styleIngredientDetails.extraInfoWrapper}`}>Белки,&nbsp;г</p>
            <p className='text text_type_digits-default'>{proteins}</p>
          </div>
          <div className={`p-4 ${styleIngredientDetails.extraInfo}`}>
            <p className={`text text_type_main-default pb-2 ${styleIngredientDetails.extraInfoWrapper}`}>Жиры,&nbsp;г</p>
            <p className='text text_type_digits-default'>{fat}</p>
          </div>
          <div className={`p-4 ${styleIngredientDetails.extraInfo}`}>
            <p className={`text text_type_main-default pb-2 ${styleIngredientDetails.extraInfoWrapper}`}>Углеводы,&nbsp;г</p>
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

export default IngredientDetails
