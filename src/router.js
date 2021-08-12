import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Entypo, AntDesign} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Acte from './pages/Acte';

const Stack = createStackNavigator();

function myStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'My home',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                        alignSelf: 'center'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen name="Acte" component={Acte}/>
        </Stack.Navigator>
    )
}


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: '#FFF',
                    borderTopColor: '#C4C4C4',
                    height: 100,
                    elevation: 5,
                },
                activeTintColor: '#06f',
                tabStyle: {
                    padding: 5,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={myStack}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="home" size={size} color={color}/>
                    )
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <AntDesign name="user" size={size} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}


function Routes() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}

export default Routes;