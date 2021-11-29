import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
// import { AppLoading } from 'expo' .This doesnt work for me i installed expo-app-loading with expo(expo install expo-app-loading)
import MealsNavigator from "./navigation/mealsNavigator";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducers/meals";
import { Provider } from "react-redux";

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer); //We can use mealsReducer directly but this is showing how we can use if we have multiple reducers

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <View style={styles.screen}>
        <MealsNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
