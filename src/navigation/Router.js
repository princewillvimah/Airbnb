import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Destinationscreen from '../screens/Destinationscreen';
import Guestscreen from '../screens/Guestscreen';
import Homescreen from '../screens/Homescreen';
import Searchscreen from '../screens/Searchscreen';
import HomeTabNavigation from './HomeTabNavigation';
import PostScreen from '../screens/PostScreen';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" 
            component={HomeTabNavigation} 
            options={{
                headerShown: false
            }}/>
            <Stack.Screen name="Destinationsearch" 
            component={Destinationscreen} 
            options={{
                title: 'search your destination'
            }}/>
            <Stack.Screen name="guest" 
            component={Guestscreen} 
            options={{
                title: 'Where are you going?'
            }}/>
            <Stack.Screen name="searchresult" 
            component={Searchscreen} 
            options={{
                title: 'search your destination'
            }}/>
            <Stack.Screen name="postscreen" 
            component={PostScreen} 
            options={{
                title: 'Accomodation'
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;