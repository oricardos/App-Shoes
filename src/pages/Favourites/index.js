import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import FavouriteItem from "../../component/FavouriteItem";

export default function Favourites() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Favourites</Text>
      </View>

      <View style={{ flexDirection: 'row', marginBottom: '5%'}}>
        <FavouriteItem />
        <FavouriteItem />
      </View>

      <View style={{ flexDirection: 'row', marginBottom: '5%'}}>
        <FavouriteItem />
        <FavouriteItem />
      </View>

      <View style={{ flexDirection: 'row', marginBottom: '5%'}}>
        <FavouriteItem />
        <FavouriteItem />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "3%",
    marginTop: "20%",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: "3%",
  },
});
