import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Header from './../../components/Header';

export default function SubNotifications({ navigation }){
    return (
        <View>
            <Header />
            <TouchableOpacity
                onPress={() => {
                    navigation.popToTop()
                }}
            >
                <Text>icon</Text>
            </TouchableOpacity>
            <Text>SubNotifications</Text>
        </View>
    )
};
