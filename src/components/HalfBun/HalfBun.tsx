import React, {FC} from 'react';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {IIngredient} from "../../interfaces/IIngredient";

interface IProps {
    type: 'top' | 'bottom',
    bun: IIngredient
}
const HalfBun: FC<IProps> = ({type, bun}) => {

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

export default HalfBun
