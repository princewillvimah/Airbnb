import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Guestscreen = () => {
    const[adult, setAdult]=useState(0);
    
    const[children, setChildren]=useState(0);
    
    const[infant, setInfant]=useState(0);
    
    const[vimah, setVimah]=useState(0);
    const navigation = useNavigation();
  return (
    <ScrollView>
      <View>
        <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',padding:20,borderBottomWidth:1,borderColor:'lightgray'}}>
                <View>
                    <Text style={{fontWeight:'bold'}}>Adults</Text>
                    <Text style={{color:'#8d8d8d'}}>Ages 13 or above</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Pressable style={styles.button} onPress={()=> setAdult(Math.max(0,adult-1))}>
                        <Text>-</Text>
                    </Pressable>
                    <Text style={{marginHorizontal:20, fontSize:16,}}>{adult}</Text>
                    <Pressable style={styles.button} onPress={()=> setAdult(adult+1)}>
                    <Text>+</Text>
                    </Pressable>
                </View>
        </View>


        <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',padding:20,borderBottomWidth:1,borderColor:'lightgray'}}>
                <View>
                    <Text style={{fontWeight:'bold'}}>Children</Text>
                    <Text style={{color:'#8d8d8d'}}>Ages 9 or above</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Pressable style={styles.button} onPress={()=> setChildren(Math.max(0,children-1))}>
                        <Text>-</Text>
                    </Pressable>
                    <Text style={{marginHorizontal:20, fontSize:16,}}>{children}</Text>
                    <Pressable style={styles.button} onPress={()=> setChildren(children+1)}>
                    <Text>+</Text>
                    </Pressable>
                </View>
        </View>


        <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',padding:20,borderBottomWidth:1,borderColor:'lightgray'}}>
                <View>
                    <Text style={{fontWeight:'bold'}}>infant</Text>
                    <Text style={{color:'#8d8d8d'}}>Ages 0 or above</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Pressable style={styles.button} onPress={()=> setInfant(Math.max(0,infant-1))}>
                        <Text>-</Text>
                    </Pressable>
                    <Text style={{marginHorizontal:20, fontSize:16,}}>{infant}</Text>
                    <Pressable style={styles.button} onPress={()=> setInfant(infant+1)}>
                    <Text>+</Text>
                    </Pressable>
                </View>
        </View>

        <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',padding:20,borderBottomWidth:1,borderColor:'lightgray'}}>
                <View>
                    <Text style={{fontWeight:'bold'}}>Vimah's fans</Text>
                    <Text style={{color:'#8d8d8d'}}>Ages 13 or above</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Pressable style={styles.button} onPress={()=> setVimah(Math.max(0,adult-1))}>
                        <Text>-</Text>
                    </Pressable>
                    <Text style={{marginHorizontal:20, fontSize:16,}}>{vimah}</Text>
                    <Pressable style={styles.button} onPress={()=> setVimah(vimah+1)}>
                    <Text>+</Text>
                    </Pressable>
                </View>
        </View>

       </View>

       <View>
          <Pressable style={{marginTop: 340,backgroundColor:'red', alignItems:'center',
           justifyContent:'center', height:50, marginHorizontal:20, borderRadius:10,}}
           onPress={()=> navigation.navigate('Home',{
              screen:'Explore',
              params:{
                screen:'Searchresult',
              },
           }
           )}
           
           >
            <Text style={{fontSize:20, color: 'white'}}>search</Text>
          </Pressable>
       </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    button:{
        borderWidth:1,
        width:30,height:30,
        borderRadius:15,
        borderColor:'#676767',
        justifyContent:'center',
        alignItems:'center',
    }
})

export default Guestscreen;