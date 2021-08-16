import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Acte from './pages/Acte';
import Login from './pages/Login';
import Slide from './pages/Slide';
import Forgot from './pages/Forgot';
import Inicial from './pages/Inicial';
import SubNotification from './pages/SubNotifications';

import Home from './pages/Home';
import Search from './pages/Search';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import MenuTab from './pages/Menu'


const Tab = createBottomTabNavigator();

function TabMenu() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Search" component={Search}/>
            <Tab.Screen name="Dashboard" component={Dashboard}/>
            <Tab.Screen name="Notifications" component={Notifications}/>
            <Tab.Screen name="MenuTab" component={MenuTab}/>
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Acte" component={Acte}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Slide" component={Slide}/>
                <Stack.Screen name="Forgot" component={Forgot}/>
                <Stack.Screen name="Inicial" component={Inicial}/>
                <Stack.Screen name="SubNotification" component={SubNotification} />

                <Stack.Screen name="TabMenu" component={ TabMenu }/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;