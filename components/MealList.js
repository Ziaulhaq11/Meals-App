import React from 'react'
import { FlatList,View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import MealItem from './mealItem'
const MealList = props => {

    const favouriteMeals = useSelector(state => state.meals.favouriteMeals)

    const renderMealItem = itemData => {//You cant use selector below in any nested statements you can use only in the main block

        const isFavourite = favouriteMeals.some(meal => meal.id === itemData.item.id)
        return (
            <MealItem title={itemData.item.title} duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability} image={itemData.item.imageUrl} onSelectMeal={() => {
                //Here we doesnt have access to navigation. Only the components which has in navigator those have access to navigation method like categorymealscreen etc;So in CategoryMealScreen we provided navigation as a prop and now calling it here then it works
                props.navigation.navigate({
                    routeName: "MealDetail",
                    params: { 
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFav : isFavourite
                    }
                })
            }}
            />
        )
    }

    return (
        <View style={styles.list}>
            <FlatList data={props.data} renderItem={renderMealItem} style={ {width : "100%"}}/>
        </View> 
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center'
    }
})

export default MealList