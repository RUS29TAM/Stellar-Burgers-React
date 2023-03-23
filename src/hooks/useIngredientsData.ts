import {useCallback, useMemo} from "react";
import {ingredientsSelectorModified} from "../services/selectors/ingredientsSelectors";
import {AppSelector} from "./appSelector";
import {IIngredients} from '../interfaces/data/IIngredients'

export const useIngredientsData = () => {
    const ingredients = AppSelector(ingredientsSelectorModified)

    const listIngredientsData = useMemo(() => {
        const ingredientsData: IIngredients = {}
        ingredients.forEach(ingredient => ingredientsData[ingredient._id] = ingredient)
        return ingredientsData
    }, [ingredients])

    const getIngredientImage = useCallback((ingredientId: string) => listIngredientsData[ingredientId].image, [listIngredientsData])
    const getIngredientPrice = useCallback((ingredientId: string) => listIngredientsData[ingredientId].price, [listIngredientsData])
    const getIngredientData = useCallback((ingredientId: string) => listIngredientsData[ingredientId], [listIngredientsData])
    const priceCalculationById = useCallback((ingredientsIdList: string[]) => ingredientsIdList.reduce((prev, ingredientId) => prev + getIngredientPrice(ingredientId), 0), [getIngredientPrice])

    return useMemo(() => ({
            listIngredientsData,
            getIngredientPrice,
            getIngredientImage,
            getIngredientData,
            priceCalculationById
        }),
        [priceCalculationById, getIngredientData, getIngredientImage, getIngredientPrice, listIngredientsData])
}
