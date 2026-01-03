import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlatList, View } from 'react-native';
import PostCard from '../components/PostCard';

const Tab = createMaterialTopTabNavigator();

const DUMMY_DATA = [
  { id: '1', userName: 'jamelle', verified: true, role: 'Web Developer', time: '17h', userImg: 'https://i.pravatar.cc/150?u=1', postBody: 'snapshots from yesterday...', postImg: 'https://picsum.photos/id/1/400/300', likes: '3.4K', comments: '100' },
  { id: '2', userName: 'Sarahj', verified: true, role: 'Designer', time: '17h', userImg: 'https://i.pravatar.cc/150?u=2', postBody: 'Amazing book club!', postImg: 'https://picsum.photos/id/2/400/300', likes: '1.2K', comments: '45' },
];

const FeedScreen = () => (
  <FlatList 
    data={DUMMY_DATA} 
    renderItem={({item}) => <PostCard item={item} />} 
    keyExtractor={item => item.id} 
    style={{backgroundColor: '#f2f2f2'}}
  />
);

export default function TopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontWeight: 'bold', textTransform: 'none' },
        tabBarIndicatorStyle: { backgroundColor: '#007FFF' },
      }}
    >
      <Tab.Screen name="Trending" component={FeedScreen} />
      <Tab.Screen name="Following" component={FeedScreen} />
      <Tab.Screen name="Clips" component={FeedScreen} />
    </Tab.Navigator>
  );
}