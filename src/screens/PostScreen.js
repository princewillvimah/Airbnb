import { View, Text } from 'react-native';
import React from 'react';
import feed from '../Component/feed';
import DetailedPost from '../Component/DetailedPost';
import { useRoute } from '@react-navigation/native';

const PostScreen = () => {
   const route=useRoute();
   const post= feed.find(feeds=> feeds.id ===route.params.postid);
  return (
    <View style={{backgroundColor: 'white'}}>
    
    <DetailedPost Post={post}/>
    
    </View>
  )
};

export default PostScreen;