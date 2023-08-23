import { View, Text ,FlatList} from 'react-native';
import React from 'react';
import feed from '../Component/feed';
import Post from '../Component/Post';

const Searchscreen = () => {
  return (
    <View>
      <FlatList
      data={feed}
      renderItem={({item})=> <Post Post={item}/>}
      />
    </View>
  )
}

export default Searchscreen;