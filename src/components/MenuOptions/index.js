import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

export default function MenuOptions({ iconName, text }) {
    return (
        <>
            <TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    justifyContent: 'space-between',
                    marginVertical: '5%'
                }}>
                    <View style={{flexDirection: 'row', alignContent: 'center'}}>
                        <AntDesign name={iconName} size={20} color="#ff0000"/>
                        <Text style={{alignSelf: 'center', marginLeft: 15}}>{text}</Text>
                    </View>
                    <AntDesign name="right" size={20} color="#ff0000"/>
                </View>
            </TouchableOpacity>
        </>

    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
});