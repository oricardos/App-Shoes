import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

import { Container, Option, TextOption } from "./styles";

export default function MenuOptions({ iconName, text }) {
    return (
        <>
            <TouchableOpacity>
                <Container>
                    <Option>
                        <AntDesign name={iconName} size={20} color="#757D8A"/>
                        <TextOption>{text}</TextOption>
                    </Option>
                    <AntDesign name="right" size={20} color="#757D8A"/>
                </Container>
            </TouchableOpacity>
        </>

    )
};