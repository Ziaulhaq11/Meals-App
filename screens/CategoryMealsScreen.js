import React from "react";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux"; //we can use connect also and then wraps it with main component while exporting
import { Text, View } from "react-native";

const CategoryMealScreen = props => {
    
    const catId = props.navigation.getParam('categoryId')

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >=0) // if id is not there it return -1
   
    if (displayedMeals.length === 0) {
        return (
            <View style={{flex : 1, justifyContent : "center", alignItems : "center"}}>
                <Text style={{fontFamily : 'open-sans-bold', textAlign : "center"}}>No meals found, may be check your filters!</Text>
            </View>
        )
    }

    return (
        <MealList data={displayedMeals} navigation={ props.navigation}/>
    )
}

CategoryMealScreen.navigationOptions = navigationData => {
    // console.log(navigationData)//This also have so many methods including getparams
    const catId = navigationData.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    // headerTitle = selectedCategory.title//This doesnt work we need to say return here
    return {
        headerTitle: selectedCategory.title,
    }
}


export default CategoryMealScreen;

/**<Text>The Category Meal Screen!</Text>
            <Text>{ displayedMeals.title}</Text>
            <Button title="GO TO MEAL DETAIL SCREEN" onPress={() => {
                props.navigation.navigate('MealDetail')
                // props.navigation.push('MealDetail')//This works same but difference is if you're on same screen loading same screen then this will load that whereas navaigate doesnt
            }} /> */