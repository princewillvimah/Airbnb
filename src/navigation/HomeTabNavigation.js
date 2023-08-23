import React from 'react';
import { Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen';
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import Profile from '../screens/Profile';
import ExploreNavigation from './ExploreNavigation';

const Tab= createBottomTabNavigator();


const HeaderComponent=()=>{
  return(
    <View style={{height:50,backgroundColor: '#fff',justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:20,fontWeight:'bold'}}>Profile Settings</Text>
    </View>
    
  );
};

const HomeTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
      name={"Explore"}
      component={ExploreNavigation}
      options={{
        headerShown:false,
        tabBarActiveTintColor:'#f15454',
        tabBarIcon: ({color}) => (
          <EvilIcons name="search" size={35} color={color} />
        )
      }}
      />
      <Tab.Screen
      name={"Heart"}
      component={Homescreen}
      options={{
        headerShown:false,
        tabBarActiveTintColor:'#f15454',
        tabBarIcon: ({color}) => (
          <AntDesign name="hearto" size={24} color={color} />
        )
      }}
      />
      <Tab.Screen
      name={"Airbnb"}
      component={Homescreen}
      options={{
        headerShown:false,
        tabBarActiveTintColor:'#f15454',
        tabBarIcon: ({color}) => (
          <FontAwesome5 name="airbnb" size={24} color={color} />
        )
      }}
      />   
      <Tab.Screen
      name={"Message"}
      component={Homescreen}
      options={{
        headerShown:false,
        tabBarActiveTintColor:'#f15454',
        tabBarIcon: ({color}) => (
          <AntDesign name="message1" size={24} color={color} />
        )
      }}
      />
      <Tab.Screen
      name={"Profile"}
      component={Profile}
      options={{
        header: ()=> <HeaderComponent/>,
        tabBarActiveTintColor:'#f15454',
        tabBarIcon: ({color}) => (
           <EvilIcons name="user" size={24} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  )
}

export default HomeTabNavigation;