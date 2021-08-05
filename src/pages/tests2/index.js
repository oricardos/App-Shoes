import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: 'one',
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: require('./../../assets/1.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 'two',
        title: 'Title 2',
        text: 'Other cool stuff',
        image: require('./../../assets/2.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 'three',
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('./../../assets/3.png'),
        backgroundColor: '#22bcb5',
    }
];

export default function Tests2() {
    const [showHome, setShowHome] = useState(false)

    function renderSlide({ item }) {
        return(
            <View style={{ flex: 1 }}>
                <Image
                    source={item.image}
                    style={styles.image}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>
        )
    }

    if (showHome) {
        return <Text>True</Text>
    } else {
        return (
            <AppIntroSlider
                data={slides}
                renderItem={renderSlide}
                activeDotStyle={{
                    backgroundColor: '#009cff',
                    width: 30
                }}
                renderNextButton={() => <Text> Próximo</Text>}
            />
        )
    }

};

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        height: '73%',
        width: '100%'
    },
    title: {
        paddingTop: 25,
        paddingBottom: 10,
        fontSize: 23,
        fontWeight: 'bold',
        color: '#009cff',
        alignSelf: 'center'
    },
    description: {
        textAlign: 'center',
        color: '#b5b5b5',
        paddingHorizontal: 25,
        fontsize: 15
    }
});