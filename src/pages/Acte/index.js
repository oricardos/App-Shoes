import React from 'react';
import { Container, Text, Image } from './styles.js';

import Button from './../../components/Button'
import { TouchableOpacity } from 'react-native';


export default function Acte({ navigation }){
    return (
        <Container>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1628377236770-6733e8d7a1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' }} />
            <Text>Uma breve descrição sobre o que é o app</Text>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Login')
                }}
            >
                <Button
                
                size="18"
                text="Iniciar"
            />
            </TouchableOpacity>
            
        </Container>
    )
};
