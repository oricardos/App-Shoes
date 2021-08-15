import React from 'react';
import { Text, View, Image } from 'react-native';
import { Container } from './styles.js';

import AppIntroSlider from 'react-native-app-intro-slider'; 

const slides = [
    {
        key: 'one',
        title: 'Title ',
        text: 'Description.\nSay something cool',
        image: require('https://images.unsplash.com/photo-1520279026570-e5f6f947b2f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 'two',
        title: 'Title 1',
        text: 'Other cool stuff',
        image: require('https://images.unsplash.com/photo-1609675076051-89ee54b95732?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80'),
        backgroundColor: '#febe29',
    },
    {
        key: 'three',
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('https://images.unsplash.com/photo-1518112166137-85f9979a43aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80'),
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