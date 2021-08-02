import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';

export default function Bag() {
 return (
   <ScrollView style={styles.container}>
       <Image
            style={styles.image}
            source={require('../../assets/masculino.jpg')}
            resizeMode="cover"
       />
       <Text> Listen</Text>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		width: "100%",
		backgroundColor: "#FFF",
	},
    image:{
        width: '100%',
        marginVertical: '15%'
    }
});