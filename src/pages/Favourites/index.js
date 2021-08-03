import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import FavouriteItem from "../../component/FavouriteItem";
import PageTitle from "../../component/PageTitle";

export default function Favourites() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <PageTitle title="Favourites" />
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
  },
});
