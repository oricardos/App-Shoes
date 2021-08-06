import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

import { Container, Option, TextOption } from "./styles";

function Icon ({ children }) {
    return (
        <>
            {children}
        </>
    )
}

export default function MenuOptions({ text, icon }) {
    return (
        <>
            <TouchableOpacity>
                <Container>
                    <Option>
                        <Icon>
                            {icon}
                        </Icon>
                        <TextOption>{text}</TextOption>
                    </Option>
                    <AntDesign name="right" size={20} color="#757D8A"/>
                </Container>
            </TouchableOpacity>
        </>

    )
};