import React from 'react';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

export const HalfBun = (props) => {
  const {bun, type} = props;

  return (
    <div className='ml-8 mr-4'>
      <ConstructorElement
        type={type}
        isLocked={true}
        text={type === 'top' ? `${bun.name} (верх)` : `${bun.name} (низ)`}
        price={bun.price}
        thumbnail={bun.image}
      />
    </div>
  );
};

HalfBun.propTypes = {
  type: PropTypes.oneOf(['top', 'bottom']).isRequired,
  bun: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })
};
