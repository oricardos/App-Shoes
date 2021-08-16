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

export default function Login({navigation}) {
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
                        Entrar
                    </FormTitle>

                    <SafeAreaView>
                        <View style={{marginVertical: 40}}>
                            <Label style={{marginBottom: 10}}>
                                Email
                            </Label>

                            <Input
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={{marginBottom: 40}}>
                            <Label style={{marginBottom: 10}}>
                                Senha
                            </Label>

                            <Input
                                keyboardType="password"
                                secureTextEntry={true}
                            />
                        </View>
                        <ForgotPassword
                            onPress={() => {
                                navigation.navigate('Forgot')
                            }}
                        >
                            Esqueceu sua Senha?
                        </ForgotPassword>
                    </SafeAreaView>

                    <TouchableOpacity
                        style={{marginTop: 50, marginBottom: 32}}
                        onPress={() => {
                            navigation.navigate('Slide')
                        }}
                    >
                        <Button
                            size="18"
                            text="Entrar"
                        />
                    </TouchableOpacity>
                </Form>


                <Text
                    style={{
                        alignSelf: 'center',
                        fontSize: 18
                    }}
                >
                    Não tem uma conta?
                    <TouchableOpacity

                    >
                        <Text style={{fontWeight: 'bold'}}> Criar conta</Text>
                    </TouchableOpacity>

                </Text>
            </LoginContent>


        </Container>
    )
};
