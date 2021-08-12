import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { Entypo, AntDesign } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';

import Home from './pages/Home';
import Profile from './pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Routes() {
    return (
        <NavigationContainer>
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
                    component={Home}
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
        </NavigationContainer>
    )
}

export default Routes;