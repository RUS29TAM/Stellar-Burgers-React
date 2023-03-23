import React, {FC} from 'react';
import styleIngredientDetails from './ingredient-details.module.css';
import {AppSelector} from "../../hooks/app-selector";
import {RootState} from "../../store/store";
import {IIngredient} from "../../interfaces/data/i-ingredient";

interface IIngredientDetails {
    extraClass: string,
    isModal: boolean,
}

const IngredientDetails: FC<IIngredientDetails> = ({extraClass, isModal = true}) => {
    // @ts-ignore
    const ingredient: IIngredient = AppSelector((state: RootState) => state.ingredientDetails.ingredient)

    return (
        <div className={`pt-10 pr-10 pb-10 pl-10 ${styleIngredientDetails.wrapper}`}>
            <h1
                className={`text text_type_main-large pt-2 ${styleIngredientDetails.heading} ${extraClass} ${!isModal && styleIngredientDetails.textCentre}`}>Детали
                ингредиента</h1>
            <img className={`m-4 ${styleIngredientDetails.imageLarge}`} src={ingredient.image_large}
                 alt={ingredient.name}/>
            <p className={`text text_type_main-medium ${styleIngredientDetails.name}`}>{ingredient.name}</p>
            <div className={`text_color_inactive p-3 ${styleIngredientDetails.extraInfoBlock}`}>
                <div className={`p-4 ${styleIngredientDetails.extraInfo}`}>
                    <p
                        className={`text text_type_main-default pb-2 ${styleIngredientDetails.extraInfoWrapper}`}>Калории,&nbsp;ккал</p>
                    <p className='text text_type_digits-default'>{ingredient.calories}</p>
                </div>
                <div className={`p-4 ${styleIngredientDetails.extraInfo}`}>
                    <p className={`text text_type_main-default pb-2 ${styleIngredientDetails.extraInfoWrapper}`}>Белки,&nbsp;г</p>
                    <p className='text text_type_digits-default'>{ingredient.proteins}</p>
                </div>
                <div className={`p-4 ${styleIngredientDetails.extraInfo}`}>
                    <p className={`text text_type_main-default pb-2 ${styleIngredientDetails.extraInfoWrapper}`}>Жиры,&nbsp;г</p>
                    <p className='text text_type_digits-default'>{ingredient.fat}</p>
                </div>
                <div className={`p-4 ${styleIngredientDetails.extraInfo}`}>
                    <p
                        className={`text text_type_main-default pb-2 ${styleIngredientDetails.extraInfoWrapper}`}>Углеводы,&nbsp;г</p>
                    <p className='text text_type_digits-default'>{ingredient.carbohydrates}</p>
                </div>
            </div>
        </div>
    );
};

export default IngredientDetails
