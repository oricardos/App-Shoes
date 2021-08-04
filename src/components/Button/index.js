import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button() {
 return (
   <View style={styles.container}>
       <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.text}>COMPRAR</Text>
       </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer:{
        width: '90%',
        height: 50,
        backgroundColor: '#000',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: '#FFF',
        fontSize: 17,
    }
});