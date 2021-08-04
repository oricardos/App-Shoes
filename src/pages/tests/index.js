import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Entypo} from "@expo/vector-icons";
import Shoes from "../../components/Shoes";


// IMPORT FOR TESTS
import Collapsible from 'react-native-collapsible';
import {
    List,
    TextInput,
    Button,
    Avatar,
    Card,
    Title,
    Paragraph
} from 'react-native-paper';


export default function Tests() {
    //COLLAPSED
    const [collapsed, setCollapsed] = React.useState(true)

    function handleClick() {
        setCollapsed(!collapsed)
    }

    // LIST.ACCORDION
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    // TEXTINPUT
    const [text, setText] = React.useState('');


    return (
        <View style={styles.container}>
            {/* COLLAPSED */}
            <Text>Collapse</Text>
            <Button onPress={handleClick} mode="contained"> Press</Button>
            <Collapsible collapsed={collapsed}>
                <Shoes/>
            </Collapsible>

            {/* LIST.ACCORDION */}
            <List.Section title="Accordions">
                <List.Accordion
                    title="Sobre"
                    onPress={handlePress}
                >
                    <List.Item title="asdfasdfasdfasfasfdasdfasdf"/>
                    <List.Item title="Second item"/>
                </List.Accordion>
            </List.Section>

            {/* TEXTINPUT*/}
            <TextInput
                mode="outlined"
                label="Email"
                placeholder="Seu melhor email"
                right={<TextInput.Affix text="/100"/>}
            />

            {/* BUTTON */}
            <Button style={{marginVertical: '3%'}} icon="camera" mode="contained"
                    onPress={() => console.log('Pressed')}>
                Press me
            </Button>
            {/*  CARD  */}
            <Card>
                <Card.Cover source={{uri: 'https://images.unsplash.com/photo-1594670297948-e910d5964979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1019&q=80'}}/>
                <Card.Title subtitle="27/05/2021"/>
                <Card.Content>
                    <Title>Facebook dobra lucro no segundo trimestre, mas espera crescer mais lentamente</Title>
                    <Paragraph>Expectativa de desaceleração se deve, especialmente, às novas regras de publicidade da
                        Apple que, recentemente, começou a obrigar os criadores de aplicativos a pedirem permissão antes
                        de coletas dados.</Paragraph>
                </Card.Content>

                <Card.Actions>
                    <Button>LER MAIS</Button>
                </Card.Actions>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: '3%',
    },
    input: {
        backgroundColor: 'transparent'
    }
});