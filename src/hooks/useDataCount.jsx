import {ingredientsSelectorReducerModified} from "../services/selectors/ingredientsSelectors";
import {useSelector} from "react-redux";
import {useCallback, useMemo} from "react";

export const useDataCount = (arrayCount) => {
    const ingredients = useSelector(ingredientsSelectorReducerModified)

    const ingredientsCountData = useMemo(() => {
        const ingredientsCount = {}
        if (!ingredients.success) return ingredientsCount
        ingredients.data.forEach((ingredient) => ingredientsCount[ingredient._id] = arrayCount.filter(arrayItem => arrayItem._id === ingredient._id).length)
        return ingredientsCount
    }, [ingredients, arrayCount])

    const getCount = useCallback((ingredientId) => ingredientsCountData[ingredientId], [ingredientsCountData])
    return useMemo(() => ({ingredientsCountData, getCount}), [getCount, ingredientsCountData])
}
