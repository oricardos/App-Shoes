import React from 'react';
import {Text, View} from 'react-native';
import { Container } from './styles.js';
import MenuOptions from "../MenuOptions";

import {AccountCircle} from '@styled-icons/material'

export default function Menu(){
    return (
        <Container>
            <View>
                <MenuOptions
                    icon={<AccountCircle />}
                    iconName="user"
                    text="Editar Perfil"
                />

                <MenuOptions
                    iconName="setting"
                    text="Configurações"
                />

                <MenuOptions
                    iconName="user"
                    text="Campanhas"
                />

                <MenuOptions
                    iconName="user"
                    text="Cursos"
                />

                <MenuOptions
                    iconName="user"
                    text="Notificações"
                />

                <MenuOptions
                    iconName="user"
                    text="Sobre"
                />

                <MenuOptions
                    iconName="user"
                    text="Privacidade"
                />

                <MenuOptions
                    iconName="user"
                    text="FAQ"
                />

                <MenuOptions
                    iconName="user"
                    text="Tema"
                />

            </View>
        </Container>
    )
};
