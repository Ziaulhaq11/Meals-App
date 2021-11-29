import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MEALS } from "../data/dummy-data";



const MealItem = (props) => {
  //if we just use imagebackground only image displays then we need to use both opening and closing tag and then it will show title as shown below
    
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.header }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgimage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{props.duration}mins</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100 %",
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
    overflow : 'hidden'
  },
  mealRow: {
    flexDirection: "row",
  },
  header: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
      justifyContent: "space-between",
      alignItems: "center",
      height : "15%"
  },
  bgimage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end", //text will be end because its a wrapper for text and text is a content for this
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,//In IOS There was a issue if these styles applied to directly on text so given here now
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

export default MealItem;
