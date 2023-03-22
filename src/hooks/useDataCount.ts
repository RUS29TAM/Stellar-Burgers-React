import {ingredientsSelectorReducerModified} from "../services/selectors/ingredientsSelectors";
import {useCallback, useMemo} from "react";
import {IIngredient} from "../interfaces/data/IIngredient";
import {IDataCount} from "../interfaces/data/IDataCount";
import {AppSelector} from "./appSelector";



export const useDataCount = (arrayCount: IIngredient[]) => {
    const ingredients = AppSelector(ingredientsSelectorReducerModified)

    const ingredientsCountData = useMemo(() => {
        const ingredientsCount: IDataCount = {}
        if (!ingredients.success) return ingredientsCount
        ingredients.data.forEach((ingredient) => ingredientsCount[ingredient._id] = arrayCount.filter(arrayItem => arrayItem._id === ingredient._id).length)
        return ingredientsCount
    }, [ingredients, arrayCount])

    const getCount = useCallback((ingredientId: string) => ingredientsCountData[ingredientId], [ingredientsCountData])
    return useMemo(() => ({ingredientsCountData, getCount}), [getCount, ingredientsCountData])
}
