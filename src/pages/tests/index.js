import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Shoes from "../../components/Shoes";
import {useNavigation} from '@react-navigation/native';


// IMPORT FOR TESTS
import Collapsible from 'react-native-collapsible';
import {
    List,
    TextInput,
    Button,
    Card,
    Title,
    Paragraph
} from 'react-native-paper';

import {ListItem, Input} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import {AntDesign} from "@expo/vector-icons";
import MenuOptions from "../../components/MenuOptions";
import CollapseFAQ from "../../components/CollapseFAQ";


export default function Tests() {

    const navigation = useNavigation();


    //COLLAPSED
    const [collapsed, setCollapsed] = React.useState(true)

    function handleClick() {
        setCollapsed(!collapsed)
    }

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
                            <Title style={{marginBottom: '5%', fontWeight: 'bold'}}>Facebook dobra lucro no segundo
                                trimestre, mas espera
                                crescer mais lentamente</Title>
                            <Paragraph style={{color: '#9E9E9E'}}>Expectativa de desaceleração se deve, especialmente,
                                às novas regras de
                                publicidade da
                                Apple que, recentemente, começou a obrigar os criadores de aplicativos a pedirem
                                permissão antes
                                de coletas dados.</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <TouchableOpacity style={{width: '100%'}} onPress={() => navigation.navigate('Test2')}>
                                <Button mode="contained" style={{
                                    width: '100%',
                                    marginVertical: '5%',
                                    backgroundColor: '#07F',
                                    paddingVertical: '2%'
                                }}>LER MAIS</Button>
                            </TouchableOpacity>

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

            <View>
                {/*<ListItem bottomDivider>*/}
                {/*    <Avatar source={{ uri: 'https://picsum.photos/700' }} />*/}
                {/*    <ListItem.Content>*/}
                {/*        <ListItem.Title>Name</ListItem.Title>*/}
                {/*        <ListItem.Subtitle>subtitle</ListItem.Subtitle>*/}
                {/*    </ListItem.Content>*/}
                {/*</ListItem>*/}
            </View>
            <View>
                <CollapseFAQ
                    title="App Tutor"
                    text="
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consequuntur dolor
                       earum repudiandae rerum vitae voluptate! Aperiam aut excepturi, impedit nisi numquam placeat qui
                       quibusdam ratione, similique, sit voluptatem!
                    "
                />
                <CollapseFAQ
                    title="App Tutossr"
                    text="
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consequuntur dolor
                       earum repudiandae rerum vitae voluptate! Aperiam aut excepturi, impedit nisi numquam placeat qui
                       quibusdam ratione, similique, sit voluptatem!
                    "
                />
            </View>

            <View>
                <Input
                    placeholder='BASIC INPUT'
                />

                <Input
                    placeholder='INPUT WITH ICON'
                    leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
                />

                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    errorMessage="Senha incorreta"
                    rightIcon={
                        <Icon name="rocket" size={30} color="#900"/>
                    }
                />
            </View>

            <View>
                <TouchableOpacity>
                    <Button mode="contained" style={{marginVertical: '5%'}}>Tests
                        pt2</Button>
                </TouchableOpacity>
            </View>

            <View>
                <MenuOptions
                    iconName="user"
                    text="Editar Perfil"
                />
                <MenuOptions
                    iconName="setting"
                    text="Configurações"
                />
                <MenuOptions
                    iconName="questioncircleo"
                    text="FAQ"
                />
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: '3%',
        backgroundColor: '##F2F2F2',
    },
    input: {
        // backgroundColor: 'transparent'
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