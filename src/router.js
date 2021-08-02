import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather, Entypo, SimpleLineIcons,AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Home from './pages/Home';
import Search from './pages/Search';
import Bag from './pages/Bag';
import Profile from './pages/Profile';
import Favourites from './pages/Favourites';


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
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Entypo name="home" size={size} color={color} />
                        )
                    }}
                />
                <Tab.Screen 
                    name="Search"
                    component={Search}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Feather name="search" size={size} color={color} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Favourites"
                    component={Favourites}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <AntDesign name="hearto" size={size} color={color}/>
                        )
                    }}
                />
                <Stack.Screen 
                    name="Bag"
                    component={Bag}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <SimpleLineIcons name="bag" size={size} color={color} />
                        )
                    }}
                />

                <Stack.Screen 
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <AntDesign name="user" size={size} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes;