import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import GlobalStyles from './src/styles/GlobalStyles'

import { AppLoading } from 'expo';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';

import Routes from './src/router';

export default function App() {
  let [ fontsLoaded ] = useFonts({
    Anton_400Regular,
  });

  if(!fontsLoaded){
    <AppLoading />
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true}/>
      <Routes />
      <GlobalStyles />
    </>
  );
}

