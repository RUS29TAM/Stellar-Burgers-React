import React, {useState} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import styleIngredients from '../BurgerIngredients/BurgerIngredients.module.css';
import ListIngredients from '../ListIngredients/ListIngredients';
import PropTypes from 'prop-types';


const BurgerIngredients = ({ingredients}) => {
    const [currentTab, setCurrentTab] = useState('one');
    const getSameIngredients = (type) => ingredients.filter((ingredient) => ingredient.type === type);

    const buns = getSameIngredients('bun');
    const sauces = getSameIngredients('sauce');
    const filling = getSameIngredients('main');

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

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number,
      image: PropTypes.string,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number,
    })
  ).isRequired,
};

export default BurgerIngredients
