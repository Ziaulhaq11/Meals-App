import React from "react";
import { FlatList } from "react-native-gesture-handler";
import CategoryGridTile from "../components/categoryGridTiles";
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
            title={itemData.item.title}
            color = {itemData.item.color}
        onSelect={() => {
          // props.navigation.navigate('CategoryMeals', {categoryId : id})
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = navData => {
  return {
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
          <Item title="Menu" iconName="ios-menu" onPress={() => {
            navData.navigation.toggleDrawer()
          }}/>
          </HeaderButtons>
    )}
}


export default CategoriesScreen;
