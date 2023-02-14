import React, {useState, useMemo} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import styleIngredients from '../BurgerIngredients/BurgerIngredients.module.css';
import ListIngredients from '../ListIngredients/ListIngredients';
import PropTypes from 'prop-types';
import {useInView} from 'react-intersection-observer';
import ingredientType from "../../utils/types";
import {useSelector} from "react-redux";

const BurgerIngredients = ({ingredients}) => {
  const cart = useSelector(state => state.burgerConstructor)
  const ingredientReducer = useSelector(state => state.ingredients)
  const [currentTab, setCurrentTab] = useState('bun');

  const {data} = useSelector((store) => store.ingredients);

  const getSameIngredients = (type) => data.filter((ingredient) => ingredient.type === type);

  const {buns, sauces, filling} = useMemo(() => {
    return {
      buns: getSameIngredients('bun'),
      sauces: getSameIngredients('sauce'),
      filling: getSameIngredients('main'),
    };
  }, [ingredients]);

  const ingredientsCounts = useMemo(() => {
    const ingredientsCount = {}
    if (ingredientReducer.isError || ingredientReducer.isLoading) return ingredientsCount;
    ingredientReducer.data.forEach((ingredient) => ingredientsCount[ingredient._id] = cart.filling.filter(cartItem => cartItem._id === ingredient._id).length)
    // eslint-disable-next-line no-unused-expressions
    cart.bun ? ingredientsCount[cart.bun._id] = 2 : false
    return ingredientsCount
  }, [ingredientReducer, cart])
  const getIngredientCount = (ingredientId) => ingredientsCounts[ingredientId]

  const [bunRef, bunsInView] = useInView({threshold: 0.1});
  const [sauceRef, saucesInView] = useInView({threshold: 0.1});
  const [mainRef, mainsInView] = useInView({threshold: 0.1});

  React.useEffect(() => {
    if (bunsInView) {
      setCurrentTab('bun')
    } else if (saucesInView) {
      setCurrentTab('sauce')
    } else {
      setCurrentTab('main')
    }
  }, [bunsInView, saucesInView, mainsInView]);


  const handleTubClick = (type) => {
    setCurrentTab(type);
    document.querySelector(`#${type}`).scrollIntoView({behavior: 'smooth'})

  }


  return (

    <section className={`burgerIngredients ${styleIngredients.burgerIngredients} ml-2`}>
      <h2 className={`text text_type_main-large mt-10 mb-5`}>Соберите бургер</h2>
      <div className={`createBurger ${styleIngredients.tabs} mt-5`}>
        <Tab value='one' active={currentTab === 'bun'} onClick={() => handleTubClick('bun', bunRef)}>
          Булки
        </Tab>
        <Tab value='two' active={currentTab === 'sauce'} onClick={() => handleTubClick('sauce', sauceRef)}>
          Соусы
        </Tab>
        <Tab value='three' active={currentTab === 'main'} onClick={() => handleTubClick('main', mainRef)}
        >
          Начинки
        </Tab>
      </div>
      <div className={styleIngredients.ingredients}>
        <div>
          <div id='bun' ref={bunRef}>
            <ListIngredients getIngredientCount={getIngredientCount} heading='Булки' list={buns}/>
          </div>
        </div>
        <div>
          <div id='sauce' ref={sauceRef}>
            <ListIngredients getIngredientCount={getIngredientCount} heading='Соусы' list={sauces}/>
          </div>
        </div>
        <div>
          <div id='main' ref={mainRef}>
            <ListIngredients getIngredientCount={getIngredientCount} heading='Начинки' list={filling}/>
          </div>
        </div>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType.isRequired)
};

export default BurgerIngredients
