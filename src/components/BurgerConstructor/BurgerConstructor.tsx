import React from 'react';
import styleConstructor from '../BurgerConstructor/BurgerConstructo.module.css';
import data from '../../utils/data'
import { IngredientGroupType } from "../ingredientGroupType/ingredientGroupType";
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { FixedBun } from "../FixedBun/FixedBun";

export const BurgerConstructor = () => {

    const fillingBurger = data.filter(item => item.type === 'main' || item.type === 'sauce');

    return (
        <section className="ml-5 mr-5">
            <div
                className={`${styleConstructor.constructorWrapper} mt-25 ml-4 mb-10`}
            >
                <FixedBun
                    type='top'
                    text='Краторная булка N-200i'
                    price={20}
                    image='https://code.s3.yandex.net/react/code/bun-02.png'
                />
                <div className={styleConstructor.dragWrapper}>
                    {fillingBurger.map((item) => (
                        <IngredientGroupType
                            key={item._id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
                <FixedBun
                    type='bottom'
                    text='Краторная булка N-200i'
                    price={20}
                    image='https://code.s3.yandex.net/react/code/bun-02.png'
                />
            </div>
            <div className={styleConstructor.footer}>
                <div className='mr-10'>
                    <span className="text text_type_digits-medium">610</span>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large" htmlType={"button"}>
                    Оформить заказ
                </Button>
            </div>
        </section>
    );
};
