import React from 'react';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ingredientType from '../../types/ingredientType';

const HalfBun = ({type, bun}) => {

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
    bun: ingredientType.isRequired
};

export default HalfBun
