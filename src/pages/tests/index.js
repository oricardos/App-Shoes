import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tests(){
    return (
        <View style={styles.container}>
            <Text>Testes</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
});