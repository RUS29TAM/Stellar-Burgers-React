import React from 'react';
import styleConstructor from '../BurgerConstructor/BurgerConstructo.module.css';
import data from '../../utils/data'
import {IngredientGroupType} from '../ingredientGroupType/ingredientGroupType';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {HalfBun} from '../HalfBun/HalfBun';
import currencyIcon from '../../images/icon/currency-icon.svg'

export const BurgerConstructor = () => {

    const fillingBurger = data.filter(item => item.type === 'main' || item.type === 'sauce');

    return (
        <section className={`${styleConstructor.basket} mr-7`}>
            <div
                className={`${styleConstructor.constructorWrapper} mb-10 mt-25 ml-4`}
            >
                <HalfBun
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
                <HalfBun
                    type='bottom'
                    text='Краторная булка N-200i'
                    price={20}
                    image='https://code.s3.yandex.net/react/code/bun-02.png'
                />
            </div>
            <div className={`${styleConstructor.acceptOrder} mr-4`}>
                <div className={`${styleConstructor.totalPrice}`}>
                    <span className="text text_type_digits-medium">610</span>
                    {/*<CurrencyIcon type="primary" />*/}
                    <img className={`currencyIcon ml-2`} src={currencyIcon} alt="Валюта"/>
                </div>
                <Button type="primary" size="large" htmlType={"button"}>
                    Оформить заказ
                </Button>
            </div>
        </section>
    );
};
