import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Listen from './pages/Listen';
import Profile from './pages/Profile';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Routes(){
    return (
        <NavigationContainer>
            <Tab.Navigator 
                tabBarOptions={{ 
                    style:{ backgroundColor: '#121212', borderTopColor: 'transparent'},
                    activeTintColor: '#FFF',
                    tabStyle:{
                        paddingBottom: 5,
                        paddingTop: 5,
                    }                    
                }}

            >
                <Tab.Screen
                    name="inicio"
                    component={Home}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Entypo name="home" size={size} color={color} />
                        )
                    }}
                />
                <Tab.Screen 
                    name="Detalhes"
                    component={Detail}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Entypo name="flash" size={size} color={color} />
                        )
                    }}
                />
                {/* GENRE PAGES */}
                <Stack.Screen 
                    name="Ouvir"
                    component={Listen}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <FontAwesome5 name="music" size={size} color={color} />
                        )
                    }}
                />

                <Stack.Screen 
                    name="Perfil"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <FontAwesome5 name="user-alt" size={size} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes;