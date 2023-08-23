import { View, Text, StyleSheet, ImageBackground, Pressable, Dimensions} from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


const Homescreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable style={({pressed})=>[
          {opacity:pressed? 0.6:1},
        styles.search,
      ]}
      onPress={()=> navigation.navigate('Destinationsearch')}> 
       
      <Feather name="search" size={25} color="#f15454" />
      <Text style={styles.SearchText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground source={require('../../assets/wallpaper.jpg') } style={styles.image}>
        <Text style={styles.title}>Go NEAR</Text>

        <Pressable style={styles.button}
        onPress={()=> console.warn('button was clicked')}>

         <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles=StyleSheet.create({
    container: {
      
    },
    image: {
      width: '100%',
      height:500,
      resizeMode:'cover',
      justifyContent: 'center',
    },
    title:{
      fontSize:60,
      fontWeight:'bold',
      color:'white',
      width:'50%',
      marginLeft:10,
    },
    button:{
      backgroundColor:'#fff',
      width: 200,
      height:40,
      borderRadius:10,
      marginLeft: 10,
      marginTop:30,
      justifyContent:'center',
      alignItems:'center',
    },
    buttonText:{
      fontSize:20,
      fontWeight:'bold',
    },
    search:{
      backgroundColor:'#fff',
      height:55,
      borderRadius:30,
      marginHorizontal:10,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      position: 'absolute',
      top: 10,
      zIndex:100,
      width:Dimensions.get('window').width-20,
    },
    SearchText:{
      fontSize:20,
      fontWeight:'bold',
      marginLeft:7,
    },
});

export default Homescreen;