import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Homescreen from '../screens/Homescreen';
import Searchscreen from '../screens/Searchscreen';
import SearchNavigation from './SearchNavigation';




const Stack = createNativeStackNavigator();


const ExploreNavigation = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
    name='welcome'
    component={Homescreen}
    options={{
        headerShown:false
    }}
    
    />


    <Stack.Screen
    name='Searchresult'
    component={SearchNavigation}
    options={{
        headerTitle:'Search Your Destination With Vimah!',
        headerTitleStyle:{fontSize:15,fontWeight:'bold'}
    }}
    />
    
    </Stack.Navigator>
  )
}

export default ExploreNavigation;