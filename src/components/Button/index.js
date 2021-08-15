import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Btn, Text} from './styles';

import { Add } from '@styled-icons/material';

export default function Button( { size, text }) {
    return (
        <Container>
                <Btn>
                    <Text fontSize={size}>
                        {text}
                    </Text>
                </Btn>
        </Container>

    );
}