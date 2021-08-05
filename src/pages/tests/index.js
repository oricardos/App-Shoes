import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
        <ScrollView style={styles.container}>
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
            <ScrollView style={styles.viewCard} horizontal showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection: 'row', width: '100vw'}}>
                    <Card style={styles.card}>
                        <Card.Cover
                            source={{uri: 'https://images.unsplash.com/photo-1594670297948-e910d5964979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1019&q=80'}}/>
                        <Card.Title subtitle="27/05/2021" style={{color: "#ff0000"}}/>
                        <Card.Content>
                            <Title style={{marginBottom: '5%', fontWeight: 'bold'}}>Facebook dobra lucro no segundo trimestre, mas espera
                                crescer mais lentamente</Title>
                            <Paragraph style={{ color: '#9E9E9E'}}>Expectativa de desaceleração se deve, especialmente, às novas regras de
                                publicidade da
                                Apple que, recentemente, começou a obrigar os criadores de aplicativos a pedirem
                                permissão antes
                                de coletas dados.</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button mode="contained" style={{
                                width: '100%',
                                marginVertical: '5%',
                                backgroundColor: '#07F',
                                paddingVertical: '2%'
                            }}>LER MAIS</Button>
                        </Card.Actions>
                    </Card>
                    <Card style={styles.card}>
                        <Card.Cover
                            source={{uri: 'https://images.unsplash.com/photo-1594670297948-e910d5964979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1019&q=80'}}/>
                        <Card.Title subtitle="27/05/2021"/>
                        <Card.Content>
                            <Title>Facebook dobra lucro no segundo trimestre, mas espera crescer mais lentamente</Title>
                            <Paragraph>Expectativa de desaceleração se deve, especialmente, às novas regras de
                                publicidade da
                                Apple que, recentemente, começou a obrigar os criadores de aplicativos a pedirem
                                permissão antes
                                de coletas dados.</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button mode="outlined">LER MAIS</Button>
                        </Card.Actions>
                    </Card>
                    <Card style={styles.card}>
                        <Card.Cover
                            source={{uri: 'https://images.unsplash.com/photo-1594670297948-e910d5964979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1019&q=80'}}/>
                        <Card.Title subtitle="27/05/2021" style={{fontSize: 140}}/>
                        <Card.Content>
                            <Title>Facebook dobra lucro no segundo trimestre, mas espera crescer mais lentamente</Title>
                            <Paragraph>Expectativa de desaceleração se deve, especialmente, às novas regras de
                                publicidade da
                                Apple que, recentemente, começou a obrigar os criadores de aplicativos a pedirem
                                permissão antes
                                de coletas dados.</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button mode="outlined">LER MAIS</Button>

                        </Card.Actions>
                    </Card>
                </View>
            </ScrollView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: '3%',
    },
    input: {
        backgroundColor: 'transparent'
    },
    viewCard: {
        width: '100%',
    },
    card: {
        elevation: 5,
        maxWidth: '80%',
        marginBottom: '2%',
        marginRight: '2%',
    },
});