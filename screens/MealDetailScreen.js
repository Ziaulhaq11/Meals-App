import React, { useEffect, useCallback } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import CustomHeaderButton from "../components/HeaderButton";
import { toggleFavourite } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listitem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const availableMeals = useSelector((state) => state.meals.meals);

  const currentMealIsFavourite = useSelector((state) =>
    state.meals.favouriteMeals.some((meal) => meal.id === mealId)
  );//TODO:why again

  const selectedMeals = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch(); //Because we cant use useDispatch in the navigation options only

  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeals.title }) //Bc this would change props so it would cause infinite loop we need to use UseEffect Using this title takes time to load because params will set after component renders and then using params so this is taking time.
    // So the solution is in MealList we are creating a mealTitle param as well then using that param in header
    props.navigation.setParams({ toggleFav: toggleFavouriteHandler });
  }, [toggleFavouriteHandler]);

  useEffect(() => {
    props.navigation.setParams({isFav : currentMealIsFavourite})
  }, [currentMealIsFavourite])// Fetching directly from its parent componet so no use of it
  
  // useEffect(() => {
  //   props.navigation.setParams({mealTitle : selectedMeals.title})
  // }, [selectedMeals]) This works but problem is after render this function calls so delay in application for showing title

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeals.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeals.duration}mins</Text>
        <Text>{selectedMeals.complexity.toUpperCase()}</Text>
        <Text>{selectedMeals.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeals.ingredients.map((meal, ind) => (
        <ListItem key={ind}>{meal}</ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>
      {selectedMeals.steps.map((meal, ind) => (
        <ListItem key={ind}>{meal}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  //we cant use UseSelector here becuase its not a react component
  const selectedMealsTitle = navigationData.navigation.getParam("mealTitle");
  const favHandler = navigationData.navigation.getParam("toggleFav");
  const isFavourite = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: selectedMealsTitle,
    // headerRight : <Text>FAV!</Text>
    //Syntax suggested by React native
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favourite" iconName={isFavourite ? "ios-star" : "ios-star-outline"} onPress={favHandler} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listitem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
