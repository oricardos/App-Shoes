import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Container, Title, Text} from './styles.js';

import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: 'one',
        title: 'Title ',
        text: 'Description.\nSay something cool',
        image: {uri: 'https://unsplash.com/photos/cuCrFcifq3Q'},
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

function renderSlides({item}) {
    return (
        <View style={{flex: 1}}>
            <Image
                source={item.image}
                style={{
                    resizeMode: 'cover',
                    height: '100%',
                    width: '100%'
                }}
            />
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
        </View>
    )
}

export default function Slide({navigation}) {

    return (
        <>
            <AppIntroSlider
                renderItem={renderSlides}
                data={slides}
                activeDotStyle={{
                    backgroundColor: '#0056FE',
                    width: 30
                }}
                renderNextButton={() => <Text>Próximo</Text>}

                renderDoneButton={() =>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('TabMenu')
                    }
                    }>
                        <Text style={{fontSize: 20, color: '#0056FE'}}>Iniciar</Text>
                    </TouchableOpacity>
                }

            />
        </>
    )

}