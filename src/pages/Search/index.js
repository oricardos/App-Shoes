import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Shoes from '../../components/Shoes';


export default function Search() {

  return (
    <ScrollView >
      <View style={styles.container} >
      <Text style={styles.text}>
        Must-Haves, Best Sellers & More
      </Text>

      <View style={styles.line}>
      </View>

      <View style={{ flexDirection: "row", marginBottom: 30, marginTop: 10 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Shoes />
          <Shoes />
          <Shoes />
        </ScrollView>
      </View>
      </View>

      <View style={styles.img}>
      </View>
      <View style={styles.img}>
      </View>
      <View style={styles.img}>
      </View>
      <View style={styles.img}>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: "3%",
    marginTop: "20%",
  },
  text: {
		color: '#000',
		fontSize: 22,
    fontWeight: 'bold',
		marginBottom: "3%"
	},
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#CCC'
  },
  img: {
    height: 110,
    width: 500,
    backgroundColor: 'yellow',
    marginTop: "1%"
  },
});
