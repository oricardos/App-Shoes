import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Masculino from './pages/Masculino';
import Feminino from './pages/Feminino';


const Stack = createStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="Detail"
                    component={Detail}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{ marginHorizontal: 25}}>
                                <Feather
                                    name="shopping-cart"
                                    size={24}
                                    color="#000"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
                {/* GENRE PAGES */}
                <Stack.Screen 
                    name="Masculine"
                    component={Masculino}
                />

                <Stack.Screen 
                    name="Feminine"
                    component={Feminino}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;