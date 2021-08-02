import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LatestStories() {
    return (
        <View style={styles.container}>
            <View style={styles.img}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        height: 250,
        width: 150,
        backgroundColor: 'red',
        borderRadius: 10,
        marginRight: 5
    }
});