import React, {FC} from 'react';
import stylesListBasket from './list-ingredients.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';
import {IIngredient} from "../../interfaces/data/IIngredient";


interface IListIngredients {
    heading: string,
    list: IIngredient[],
    getIngredientCount: (ingredientId: string | number) => number
}
const ListIngredients: FC<IListIngredients> = ({heading, list, getIngredientCount}) => {
    return (
        <>
            <h3 className='text text_type_main-medium mt-10 mb-6'>
                {heading}
            </h3>
            <div className={`${stylesListBasket.list} ml-4 mr-2`}>
                {list.map((item) => (
                    <IngredientCard getIngredientCount={getIngredientCount}
                                    key={item._id}
                                    ingredient={item}/>
                ))}
            </div>
        </>
    );
};

export default ListIngredients

