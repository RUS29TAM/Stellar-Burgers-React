import React from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

// @ts-ignore
export const FixedBun = ({ type, text, price, image }) => {

    return (
        <div className='ml-8 mr-4'>
            <ConstructorElement
                type={type}
                isLocked={true}
                text={type === 'top' ? `${text} (верх)` : `${text} (низ)`}
                price={price}
                thumbnail={image}
            />
        </div>
    );
};

FixedBun.propTypes = {
    type: PropTypes.oneOf(['top', 'bottom']),
    bun: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    })
};