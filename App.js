import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import GlobalStyles from './src/styles/GlobalStyles';

import Routes from './src/router';

export default function App() {
    return (
        <>
            <StatusBar style="light" backgroundColor="#000" translucent={true}/>
            <Routes/>
            <GlobalStyles/>
        </>
    );
}

