import React from 'react';
import {Text, View} from 'react-native';
import { Container } from './styles.js';
import MenuOptions from "../MenuOptions";

import {
    Person,
    Settings,
    Campaign,
    Book,
    Notifications,
    Info,
    Lock,
    Help
} from '@styled-icons/material';

import { ColorPalette } from '@styled-icons/evaicons-solid/ColorPalette';

export default function Menu(){
    return (
        <Container>
            <View>
                <MenuOptions
                    icon={
                        <Person
                            size="35"
                        />}
                    text="Editar Perfil"
                />

                <MenuOptions
                    icon={
                        <Settings
                            size="35"
                        />}
                    text="Configurações"
                />

                <MenuOptions
                    icon={
                        <Campaign
                            size="40"
                        />}
                    text="Campanhas"
                />

                <MenuOptions
                    icon={
                        <Book
                            size="35"
                        />}
                    text="Cursos"
                />

                <MenuOptions
                    icon={
                        <Notifications
                            size="35"
                        />}
                    text="Notificações"
                />

                <MenuOptions
                    icon={
                        <Info
                            size="35"
                        />}
                    text="Sobre"
                />

                <MenuOptions
                    icon={
                        <Lock
                            size="35"
                        />}
                    text="Privacidade"
                />

                <MenuOptions
                    icon={
                        <Help
                            size="35"
                        />}
                    text="FAQ"
                />

                <MenuOptions
                    icon={
                        <ColorPalette
                            size="35"
                        />
                    }
                    text="Tema"
                />

            </View>
        </Container>
    )
};
