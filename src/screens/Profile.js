import { View, Text,Pressable,Image,StyleSheet,ScrollView} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import SettingDetail from '../Component/SettingDetail';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 


const Profile = () => {
 
  return (
    <ScrollView>
      <Pressable onPress={()=> console.warn('valentina njoku')} style={styles.root}>
        <View style={styles.container}>
        <Image source={require('../../assets/wallpaper.jpg')}
        style={styles.image}
        />
        <View style={styles.textBackground}>
        <Text style={styles.text1}>Bigman Shop</Text>
        <Text style= {styles.text3} numberOfLines={1}> Hey i'm using Vimah's airbnb app what about you</Text>
        </View>
       

        <View style={styles.setting}>
        <AntDesign name="setting" size={24} color="black" />

        </View>
        </View>
      </Pressable>
      <SettingDetail
      icon= <Entypo name="key" size={24} color="black" />
      headerText='Account'
      bodyText='Security notification change number'
      />
      <SettingDetail
      icon= <Entypo name="lock" size={24} color="black" />
      headerText='Privacy'
      bodyText='Change and hide anything about your profile here'
      />
      <SettingDetail
      icon= <FontAwesome5 name="strava" size={24} color="black" />
      headerText='Avatar'
      bodyText='come , be anm anime freak here..'
      />
      <SettingDetail
      icon= <AntDesign name="message1" size={24} color="black" />
      headerText='Chats'
      bodyText='Chat with your loved ones and come prepared'
      />
      <SettingDetail
      icon= <AntDesign name="notification" size={24} color="black" />
      headerText='Notification'
      bodyText='Get notified about your work here '
      />
      <SettingDetail
      icon= <MaterialIcons name="sd-storage" size={24} color="black" />
      headerText='Storage and data'
      bodyText='Store data, and be blessed with me '
      />
      <SettingDetail
      icon=<AntDesign name="apple1" size={24} color="black" />
      headerText='App langauge'
      bodyText='Learn to build applications on your own with vimah'
      />
      <SettingDetail
      icon= <Entypo name="help-with-circle" size={24} color="black" />
      headerText='Help'
      bodyText='Help, ask for any question of your choice.'
      />
      <SettingDetail
      icon= <Entypo name="key" size={24} color="black" />
      headerText='Invite a friend'
      bodyText='Invite, and get £30,00'
      />
      <SettingDetail
      icon= <FontAwesome5 name="invision" size={24} color="black" />
      headerText='Gift'
      bodyText='Security notification change number'
      />
    </ScrollView>
  );
};

const styles=StyleSheet.create({
    root:{
     
    },
  
    container:{
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between',
       backgroundColor:'#eee',
       padding:7,
       borderBottomWidth:2,
       borderBottomColor: '#fff',
    },
   image:{
    width:80,
    height:80,
    borderRadius:70,
   },
   
   text1:{
    alignSelf:'flex-start',
    fontWeight:'bold',
    fontSize:18,
   },
   text2:{
    fontSize:12,
    marginRight:5,
   },
   textBackground:{
    marginHorizontal:15,
    height:'70%',
    width:'60%',
    textAlign:'center',
    alignItems:'center',
   },
   text3:{
    marginVertical:5,
    marginBottom:30,
    alignSelf: 'flex-start',
   },
  
})

export default Profile;