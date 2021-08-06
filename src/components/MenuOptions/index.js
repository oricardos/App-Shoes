import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Option, TextOption } from "./styles";
import {ChevronRight} from "@styled-icons/material";

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
                        <Icon style={{ color: '#A3A3A3'}}>
                            {icon}
                        </Icon>
                        <TextOption>{text}</TextOption>
                    </Option>
                    <ChevronRight size="25" style={{ color: '#A3A3A3'}}/>
                </Container>
            </TouchableOpacity>
        </>

    )
};