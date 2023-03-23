import React, {FC} from 'react';
import styleCard from './ingredient-card.module.css';
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDrag} from "react-dnd";
import {Link} from "react-router-dom";
import {IIngredient} from "../../interfaces/data/IIngredient";

interface IIngredientCard {
    ingredient: IIngredient,
    getIngredientCount: (ingredientId: string | number) => number
}
const IngredientCard: FC<IIngredientCard> = ({ingredient, getIngredientCount}) => {
    const [, dragRef] = useDrag({
        type: 'ingredientCard',
        item: ingredient,
    });

    return (
        <div ref={dragRef} className={styleCard.card}>
            <Link to={`/ingredients/${ingredient._id}`} className={"text_color_primary"}
                  state={{ingredient: ingredient, from: '/'}}>
      <span className={styleCard.span}>
      <img className={`mr-4 ml-4`} src={ingredient.image} alt={ingredient.name}/>
      <div className={`mt-1 mb-1 ${styleCard.price}`}>
        <span className={`text text_type_digits-default ${styleCard.nbsp}`}>{ingredient.price}</span>
        <CurrencyIcon type="primary"/>
      </div>
      <div className={styleCard.name}>
        <span className='text text_type_main-default'>{ingredient.name}</span>
      </div>
          {getIngredientCount(ingredient._id) !== 0 &&
              <Counter count={getIngredientCount(ingredient._id)} size="default"/>}
      </span>
            </Link>
        </div>
    );
};

export default IngredientCard
