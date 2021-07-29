import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Masculino() {
 return (
   <View style={styles.container}>
       <Image
            style={styles.image}
            source={require('../../assets/masculino.jpg')}
       />
   </View>
  );
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        resizeMode: 'contain'
    }
});