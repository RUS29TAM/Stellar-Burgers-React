import React from 'react';
import styleOrderDetails from './OrderDetails.module.css';
import PropTypes from 'prop-types';
import {Popup} from '../Modal/Modal';


export const OrderDetails = (props) => {
  const {...modalProps} = props;

  return (
    <Popup {...modalProps}>
      <div className={`pt-30 pb-30 ${styleOrderDetails.wrapper}`}>
        <p className={`text text_type_digits-large mb-8 ${styleOrderDetails.numOrder}`}>034536</p>
        <p className="text text_type_main-medium mb-15">Идентификатор заказа</p>
        <img className="mb-15" src='' alt=''/>
        <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      </div>
    </Popup>
  );
};

OrderDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};
