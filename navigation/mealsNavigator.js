//if we are using react navigation v3 then no need to install anything and we import from 'react-navigation'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform, Text } from "react-native";
import Colors from "../constatns/Colors";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import FavouriteScreen from "../screens/FavouriteScreen";
import FilterScreen from "../screens/FilterScreen";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const defaultStackNavOptions = {
  // initialRouteName : "MealDetailScreen",//We can set the default screen with this
  // mode : "modal",//Slide up from bottom by default card has been set
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans", //It is for IOS there for back it shows BackScreen Name forwhich we are setting styles
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

//This is a stack like there is all pages top on that. So first Categories will load and.

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories", //So this will overwrite other headertitles if we did in Component itself previously and the least is defaultNavigation
      },
    },
    CategoryMeals: {
      screen: CategoryMealScreen,
      //This is the longer version we can say by this we can add more options
      // navigationOptions: {
      //     headerStyle: {
      //         backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      //     },
      //     headerTintColor: Platform.OS === 'android' ? "white" : Colors.primaryColor
      // }
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favourites: FavouriteScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FilterNavigator = createStackNavigator(
  {
    Filter: FilterScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
// navigationOptions: {
//   drawerLabel : 'Filters!!!'
// },
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabinfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabinfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals!!!</Text>
        ) : (
          "Meals!!!"
        ),
    },
  },
  Favourites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favourites!!!</Text>
        ) : (
          "Favourites!!!"
        ),
      tabBarIcon: (tabinfo) => {
        return <Ionicons name="ios-star" size={25} color={tabinfo.tintColor} />; //React native will fetch information of tabBaroptions and then it is in tabinfo so we have access to this tintcolor as well.
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

//Navigation Options in the config (2nd argument) of a navigator only matter if that navigator is used inside of another navigator like Meals here.
const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true, //Bubbling kind of effect
      })
    : createBottomTabNavigator(
        tabScreenConfig,
        {
          tabBarOptions: {
            labelStyle: {
              fontFamily: "open-sans",
            },
            activeTintColor: Colors.accentColor,
          },
        },
        {
          navigationOptions: {
            tabBarLabel: "FAVOURITES",
          },
        }
      );

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: {
      screen: FilterNavigator,
      navigationOptions: {
        drawerLabel: "Filters",
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        textAlign: "center",
        margin: 50,
        fontFamily: "open-sans",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
// export default createAppContainer(MealsNavigator); Because now above one is a main navigator since it contains MealsNavigator as well
