import { View, Text,StyleSheet, Image,ScrollView } from 'react-native';
import React from 'react';


const DetailedPost = (props) => {
    const post= props.Post;
  return (
    <ScrollView>
    <View style={styles.container}>
    <Image
    style={styles.image}
    source={{uri:post.image}}
    />
    <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>
    <Text style={styles.description} numberOfLines={2}>{post.type}.{post.title}</Text>
    <Text style={styles.prices}>
      <Text style={styles.oldprice}>${post.oldPrice}</Text>
      <Text style={styles.price}> ${post.newPrice}</Text> /night
    </Text>
    <Text style={styles.totalprice}>${post.totalPrice}</Text>

    <Text style={styles.desp}>{post.description}</Text>
    </View>
    
    </ScrollView>

  );
};
const styles=StyleSheet.create({
    container:{
       margin:10,
    },
    image:{
    width:'100%',
    aspectRatio: 3/2,
    resizeMode:'cover',
    borderRadius:10,
    },
    description:{
      fontSize:18,
      lineHeight:26,
    },
    bedrooms:{
      marginVertical:10,
      color:'#5b5b5b'
    },
    prices:{
      fontSize:18,
    },
    oldprice:{
      color:'#5b5b5b',
      textDecorationLine:'line-through',
      marginRight:5,
    },
    price:{
    fontWeight:'bold'
    },
    totalprice:{
        color:'#5b5b5b',
        textDecorationLine:'underline',
        marginRight:5,
    },
    desp:{
      marginVertical: 20,
      fontSize: 16,
      lineHeight:24,
    }


});

export default DetailedPost;