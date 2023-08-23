import { View, Text ,StyleSheet,Pressable} from 'react-native';
import React from 'react';


const SettingDetail = (props) => {
    const {icon,headerText,bodyText}=props
  return (
    <Pressable onPress={()=> console.warn(' thanks for clicking this ')} style={({pressed})=> [
        {opacity: pressed? 0.6: 1, backgroundColor: pressed? '#888':'#eee'}, styles.setMainCon
    ]}>
        <View style={styles.setCon}>
            <View>
               {icon}
            </View>
            <View style={styles.textCon}>
                <Text style={styles.accText}>{headerText}</Text>
                <Text>{bodyText}</Text>
            </View>
        </View>
    </Pressable>
  );
};
const styles=StyleSheet.create({
    setMainCon:{
        paddingVertical:20,
         paddingHorizontal: 20,
      },
      setCon:{
         flexDirection: 'row',
         alignItems:'center', 
      },
      textCon:{
        marginHorizontal: 20,
        width: 200,
      },
      setting:{
        marginRight:20,
        flexDirection:'row',
    },
    accText:{
        fontSize:17,
        fontWeight:'bold',
    }
})

export default SettingDetail;