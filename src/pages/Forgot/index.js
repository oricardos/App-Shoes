import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {ArrowIosBackOutline} from '@styled-icons/evaicons-outline/ArrowIosBackOutline';
import {
    Container,
    LoginContent,
    Form,
    FormTitle,
    Input,
    Label,
    ForgotPassword
} from './styles.js';
import {SafeAreaView} from 'react-native';
import Button from '../../components/Button/index.js';

export default function Forgot({navigation}) {
    return (
        <Container>
            <LoginContent>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Acte')
                }}>
                    <ArrowIosBackOutline size="24"/>
                </TouchableOpacity>
                <Form>
                    <FormTitle>
                        Senha Perdida
                    </FormTitle>

                    <SafeAreaView>
                        <View style={{marginTop: 40, marginBottom: 16}}>
                            <Label style={{marginBottom: 10}}>
                                Email
                            </Label>

                            <Input
                                keyboardType="numeric"
                            />
                        </View>
                        <ForgotPassword
                            onPress={() => {
                                navigation.navigate('Forgot')
                            }}
                        >
                            Você receberá um link por e-mail para criar uma nova senha.
                        </ForgotPassword>
                    </SafeAreaView>

                    <TouchableOpacity
                        style={{marginTop: 50, marginBottom: 32}}
                        onPress={() => {
                            navigation.navigate('Login')
                        }}
                    >
                        <Button
                            size="18"
                            text="Recuperar senha"
                        />
                    </TouchableOpacity>
                </Form>
            </LoginContent>


        </Container>
    )
};
