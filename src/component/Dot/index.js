import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

export default function Dot(props) {
    return (
        <View style={[styles.container, {backgroundColor: props.color }]}>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: '2%',
        height: Dimensions.get('window').width * 0.050, //pesquisar
        width: Dimensions.get('window').width * 0.050,
        borderRadius: Dimensions.get('window').width * 0.050 / 2,
        elevation: 5,
    }
});
