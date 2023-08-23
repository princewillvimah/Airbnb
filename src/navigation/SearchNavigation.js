import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import React from 'react';
import { View ,Text} from 'react-native';
import Searchscreen from '../screens/Searchscreen';
import Vimahs from '../screens/Vimahs';

const Tab = createMaterialTopTabNavigator();
const SearchNavigation = () => {
  return (
    <Tab.Navigator >
    <Tab.Screen 
     options={{
      tabBarActiveTintColor: '#f15454',
      tabBarIndicatorStyle:{
        backgroundColor:'#f15454',
      },
     }}
    name={'list'}
    component={Searchscreen}
    />
    <Tab.Screen 
    options={{
      tabBarActiveTintColor:'#f15454',
      tabBarIndicatorStyle:{
        backgroundColor:'#f15454',
      },
      
    }}
    name={'Vimah'}
    component={Vimahs}
    />
    </Tab.Navigator>
  );
};

export default SearchNavigation;