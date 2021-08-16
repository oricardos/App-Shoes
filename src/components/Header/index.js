import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Text } from './styles.js';

export default function Header({routes, navigation, onPress }){
    return (
        <Container>

            <Text>Notificações</Text>
            <Text>Image</Text>
        </Container>
    )
};
