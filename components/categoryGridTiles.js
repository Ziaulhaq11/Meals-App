import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Platform,TouchableNativeFeedback } from 'react-native'

const CategoryGridTile = props => {

  let TouchableCmp = TouchableOpacity

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }
  return (
      <View style={styles.gridItem}>
        <TouchableCmp style={{flex : 1}} onPress={props.onSelect}>
        <View style={{ ...styles.container, ...{ backgroundColor: props.color }}}>
          <Text style={styles.title} numberOfLines ={2}>
            {props.title}</Text>
        </View>
      </TouchableCmp>
      </View>
    )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 100,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? "hidden" : "visible",
    elevation: 3,//THis is for Android above wont work
  },
  container: {
    height: "100%",//flex : 1
    borderRadius : 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign : "right"
  }
})

export default CategoryGridTile