import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Container} from './styles.js';
import Header from './../../components/Header'
import Button from "../../components/Button";

export default function Notifications({ navigation }) {
    return (
        <Container>
            <Header/>
            <TouchableOpacity
                onPress={() => {navigation.navigate('SubNotification')}}
            >
                <Button
                size="18"
                text="SubNotifications"
            />
            </TouchableOpacity>

        </Container>
    )
};
