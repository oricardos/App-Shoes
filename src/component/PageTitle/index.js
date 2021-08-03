import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PageTitle(props) {
 return (
   <View>
       <Text style={styles.text}>
        {props.title}
       </Text>
   </View>
  );
}

const styles = StyleSheet.create({
    text: {
        marginTop: "20%",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: "3%",
    }
});