import React, {useState} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import styleIngredients from '../BurgerIngredients/BurgerIngredients.module.css';
import data from '../../utils/data'
import {ListIngredients} from '../ListIngredients/ListIngredients';


export const BurgerIngredients = () => {
    const [currentTab, setCurrentTab] = useState('one');

    const buns = [];
    const sauces = [];
    const filling = [];

    data.forEach((ingredient) => {
        switch (ingredient.type) {
            case 'bun':
                buns.push(ingredient);
                break;
            case 'main':
                filling.push(ingredient);
                break;
            case 'sauce':
                sauces.push(ingredient);
                break;
            default:
                return;
        }
    })
    return (
        <section className={`burgerIngredients ${styleIngredients.burgerIngredients} ml-2`}>
            <h2 className={`text text_type_main-large mt-10 mb-5`}>Соберите бургер</h2>
            <div className={`createBurger ${styleIngredients.tabs} mt-5`}>
                <Tab value='one' active={currentTab === 'one'} onClick={setCurrentTab}>
                    Булки
                </Tab>
                <Tab value='two' active={currentTab === 'two'} onClick={setCurrentTab}>
                    Соусы
                </Tab>
                <Tab value='three' active={currentTab === 'three'} onClick={setCurrentTab}
                >
                    Начинки
                </Tab>
            </div>
            <div className={styleIngredients.ingredients}>
                <ListIngredients heading='Булки' list={buns}/>
                <ListIngredients heading='Соусы' list={sauces}/>
                <ListIngredients heading='Начинки' list={filling}/>
            </div>
        </section>
    );
};

