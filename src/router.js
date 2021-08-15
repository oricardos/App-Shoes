import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Acte from './pages/Acte';
import Login from './pages/Login';
import Slide from './pages/Slide';
import Forgot from './pages/Forgot';


const Stack = createStackNavigator();


// const Tab = createBottomTabNavigator();

// function MyTabs() {
//     return (
//         <Tab.Navigator
//             tabBarOptions={{
//                 showLabel: false,
//                 style: {
//                     backgroundColor: '#FFF',
//                     borderTopColor: '#C4C4C4',
//                     height: 100,
//                     elevation: 5,
//                 },
//                 activeTintColor: '#06f',
//                 tabStyle: {
//                     padding: 5,
//                 }
//             }}
//         >
//             <Tab.Screen
//                 name="Home"
//                 component={myStack}
//                 options={{
//                     tabBarIcon: ({size, color}) => (
//                         <Entypo name="home" size={size} color={color}/>
//                     )
//                 }}
//             />

//             <Tab.Screen
//                 name="Profile"
//                 component={Profile}
//                 options={{
//                     tabBarIcon: ({size, color}) => (
//                         <AntDesign name="user" size={size} color={color}/>
//                     )
//                 }}
//             />
//         </Tab.Navigator>
//     )
// }


function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Acte" component={ Acte } />
                <Stack.Screen name="Login" component={ Login } />
                <Stack.Screen name="Slide" component={ Slide } />
                <Stack.Screen name="Forgot" component={ Forgot } />
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}

export default Routes;