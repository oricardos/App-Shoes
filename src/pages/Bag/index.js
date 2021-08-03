import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import PageTitle from '../../component/PageTitle';

export default function Bag() {
 return (
   <ScrollView style={styles.container}>
       <PageTitle title="Bag" />
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