import {MEALS} from '../../data/dummy-data'
import { TOGGLE_FAVOURITE,SET_FILTERS } from '../actions/meals'

const initialState = {
    meals: MEALS ,
    filteredMeals: MEALS,
    favouriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            const existingIndex = state.favouriteMeals.findIndex(meal => meal.id === action.mealId)
            console.log(existingIndex)
            if (existingIndex >= 0) { //means already there so removing it
                const updatedFavMeals = [...state.favouriteMeals]
                updatedFavMeals.splice(existingIndex, 1);
                return {...state, favouriteMeals : updatedFavMeals}
            } else {
                // const meal = state.meals.find(meal => meal.id === action.mealId)
                // const updatedFavMeals = [...state.favouriteMeals]
                // updatedFavMeals.push(meal)//Because this adds new element but returns length so cant use it directly
                // return {...state, favouriteMeals: updatedFavMeals} //My approach also works
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return {...state, favouriteMeals : state.favouriteMeals.concat(meal)}
            }
        case SET_FILTERS:
            const appliedFilters = action.filters
            const updatedFilteredMeals = state.meals.filter(meal => {
                console.log(appliedFilters, meal)
                console.log(meal.isGlutenFree)
                console.log(!meal.isGlutenFree)
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    console.log('Vegetarian False')
                    return false
                }
                return true
            })
            return {...state, filteredMeals : updatedFilteredMeals}
        default:
            return state
    }

    return state
}

export default mealsReducer