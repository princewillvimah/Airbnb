import { View, Text ,StyleSheet, Pressable} from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const Searchresult = (props) => {
  const navigation= useNavigation();
    const {description}=props.result
  return (
    <Pressable style={styles.rows} onPress={()=> navigation.navigate('guest')}>
      <View style={styles.iconContainer}>
      <Entypo name="location" size={24} color="black" />
      </View>
      
      <Text style={styles.locationText}>{description}</Text>
    </Pressable>
  );
};
const styles=StyleSheet.create({
    rows:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:20,
        borderBottomWidth:1,
        borderColor:'lightgray',
    },
    iconContainer:{
        backgroundColor:'#ece4e4',
        padding:5,
        borderRadius:10,
        marginRight: 15,
    },

    locationText:{
     fontWeight:'bold',
     fontSize:16,
    }
});

export default Searchresult;