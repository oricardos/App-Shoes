import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FavouriteItem() {
  return (
    <View>
      <View style={styles.item}></View>

      <View style={styles.textContainer}>
        <Text>Nike Air Force 1 '07</Text>
        <Text>US$90</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 200,
    width: 200,
    backgroundColor: "blue",
    marginRight: "2%",
  },
  textContainer: {
    paddingHorizontal: "5%"
  }
});
