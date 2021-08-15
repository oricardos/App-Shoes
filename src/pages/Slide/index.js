import React from 'react';
import { Text, View, Image } from 'react-native';
import { Container } from './styles.js';

import AppIntroSlider from 'react-native-app-intro-slider'; 

const slides = [
    {
        key: 'one',
        title: 'Title ',
        text: 'Description.\nSay something cool',
        image: {uri: 'https://reactnative.dev/img/tiny_logo.png'},
        backgroundColor: '#59b2ab',
    },
    {
        key: 'two',
        title: 'Title 1',
        text: 'Other cool stuff',
        image: {uri: 'https://reactnative.dev/img/tiny_logo.png'},
        backgroundColor: '#febe29',
    },
    {
        key: 'three',
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: {uri: 'https://reactnative.dev/img/tiny_logo.png'},
        backgroundColor: '#22bcb5',
    }
];

function renderSlides({ item }) {
    return(
        <View style={{ flex: 1 }}>
            <Image
                source={ item.image }
                style={{ 
                    resizeMode: 'cover',
                    height: '73%',
                    width: '100%'
                }}
            />
            <Text>{ item.title }</Text>
            <Text>{ item.text }</Text>
        </View>
    )
}

export default function Slide(){
    const [showHome, setShowHome] = React.useState(false);

    if(showHome){
        <Text>App</Text>
    } else {
        return(
        <AppIntroSlider
            renderItem={renderSlides}
            data={slides}
            activeDotStyle={{
                backgroundColor: '#0056FE',
                width: 30
            }}
        />
    )
    }
    
}