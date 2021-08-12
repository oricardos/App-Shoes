import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Btn, Text} from './styles';

import { Add } from '@styled-icons/material';

export default function Button() {
    return (
        <Container>
            <TouchableOpacity>
                <Btn>
                    <Text fontSize={14}>
                        <Add style={{ marginRight: 16 }}
                            size="20"
                        />
                        Adicionar Campanha
                    </Text>
                </Btn>
            </TouchableOpacity>

            <TouchableOpacity>
                <Btn>
                    <Text fontSize={24}>
                        <Add style={{ marginRight: 16 }}
                            size="20"
                        />
                        Adicionar Campanha
                    </Text>
                </Btn>
            </TouchableOpacity>
        </Container>

    );
}