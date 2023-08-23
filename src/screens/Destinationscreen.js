import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import Searchresult from '../Component/Searchresult';
import search from '../Component/search';

const Destinationscreen = () => {
    const{inputText, setInputText}=useState();
  return (
    <View style={styles.container}>
    <TextInput
    style={styles.textinput}
    placeholder='Where are you going?'
    value={inputText}
    onChange={setInputText}
    />
    <FlatList
    data={search}
    renderItem={({item})=> <Searchresult result={item}/>}

    />
    </View>
  );
};
const styles=StyleSheet.create({
  container:{
    margin:20,
  },
  textinput:{
    fontSize: 20,
    marginBottom:20,
    
  }
});

export default Destinationscreen;