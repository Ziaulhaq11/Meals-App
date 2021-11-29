import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { Text, View,StyleSheet } from "react-native";

const FavouriteScreen = (props) => {

  const favouriteMeals = useSelector(state => state.meals.favouriteMeals)

  if (favouriteMeals.length === 0 || !favouriteMeals) {
    return (
      <View style={styles.content}>
        <Text style={{fontFamily : "open-sans-bold"}}>No favourite Meals Found ! Add some</Text>
      </View>
    )
  }

  return <MealList data={favouriteMeals} navigation={props.navigation} />;
};

FavouriteScreen.navigationOptions = (navData) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Filter"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems :"center"
  }
})

export default FavouriteScreen;
