import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Container } from './styles.js';

export default function Home({ navigation }){
    return (
        <Container>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Acte')
            }}>
                <Text>Ir para página</Text>
            </TouchableOpacity>

        </Container>
    )
};
