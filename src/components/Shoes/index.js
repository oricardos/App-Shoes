import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Shoes(props) {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={props.onClick}>
        <View style={styles.img}></View>
        <View style={{ marginVertical: 10 }}></View>
        <Text style={styles.shoesName}>Nike Air Presto</Text>
        <Text style={styles.shoesPrice}>$130</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "2%",
  },
  img: {
    width: 350,
    height: 350,
    backgroundColor: "green",
    marginRight: 5,
  },
  shoesName: {
    fontSize: 16,
  },
  shoesPrice: {
    fontSize: 16,
    color: "#CCC",
  },
});
