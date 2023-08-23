import { View, Text } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 

const Vimahs = () => {
  return (
    <View style={{width:'100%',height:'100%',backgroundColor:'black',}}>
    <View style={{flexDirection:'row',alignItems:'center',}}>
    
    <Text style={{justifyContent:'center',color:'white', fontSize:90, textAlign:'center',fontWeight:'bold',marginTop:250,fontSize:20, marginLeft: 130,}}>VIMAH!! 
    <FontAwesome5 name="laugh-squint" size={50} color="white" /></Text>
    
    </View>
      
    </View>
  )
}

export default Vimahs;