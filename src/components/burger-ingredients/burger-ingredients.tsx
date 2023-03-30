import React, {useState, useMemo, useEffect, FC} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import styleIngredients from './burger-ingredients.module.css';
import ListIngredients from '../list-ingredients/list-ingredients';
import {useInView} from 'react-intersection-observer';
import {IIngredient} from "../../interfaces/data/i-ingredient";
import {AppSelector} from "../../hooks/app-selector";

interface IBurgerIngredients {
    ingredients: IIngredient[]
}

const BurgerIngredients: FC<IBurgerIngredients> = ({ingredients}) => {
    const cart = AppSelector((state) => state.burgerConstructor)
    const ingredientReducer = AppSelector((state) => state.ingredients)
    const [currentTab, setCurrentTab] = useState('bun');
    const {data} = AppSelector((store) => store.ingredients);

    const getSameIngredients = (type: string) => data.filter((ingredient) => ingredient.type === type);

    const {buns, sauces, filling} = useMemo(() => {
        return {
            buns: getSameIngredients('bun'),
            sauces: getSameIngredients('sauce'),
            filling: getSameIngredients('main'),
        };
    }, [ingredients]);

    const ingredientsCounts = useMemo(() => {
        const ingredientsCount: any = {}
        if (ingredientReducer.error || ingredientReducer.loading) return ingredientsCount;

        ingredientReducer.data.forEach((ingredient) => ingredientsCount[ingredient._id] = cart.filling.filter(cartItem => cartItem._id === ingredient._id).length)
        if (cart.bun) {

            ingredientsCount[cart.bun["_id"]] = 2
        }
        return ingredientsCount
    }, [ingredientReducer, cart])

    const getIngredientCount = (ingredientId: string | number) => ingredientsCounts[ingredientId]

    const [bunRef, bunsInView] = useInView({threshold: 0.1});
    const [sauceRef, saucesInView] = useInView({threshold: 0.1});
    const [mainRef, mainsInView] = useInView({threshold: 0.1});

    useEffect(() => {
        if (bunsInView) {
            setCurrentTab('bun')
        } else if (saucesInView) {
            setCurrentTab('sauce')
        } else {
            setCurrentTab('main')
        }
    }, [bunsInView, saucesInView, mainsInView]);

    const handleTubClick = (type: React.SetStateAction<string>) => {
        setCurrentTab(type);
        const element = document.querySelector(`#${type}`)
        if (element) element.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <section className={`burgerIngredients ${styleIngredients.burgerIngredients} ml-2`}>
            <h2 className={`text text_type_main-large mt-10 mb-5`}>Соберите бургер</h2>
            <div className={`createBurger ${styleIngredients.tabs} mt-5`}>
                <Tab value='one' active={currentTab === 'bun'} onClick={() => handleTubClick('bun')}>
                    Булки
                </Tab>
                <Tab value='two' active={currentTab === 'sauce'} onClick={() => handleTubClick('sauce')}>
                    Соусы
                </Tab>
                <Tab value='three' active={currentTab === 'main'} onClick={() => handleTubClick('main')}>
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

export default BurgerIngredients
