// navigation/TopTabNavigator.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, FlatList, StyleSheet } from 'react-native';

// Import your custom components and screens
import PostCard from '../components/PostCard';
import ClipsScreen from '../screens/ClipsScreen';

const Tab = createMaterialTopTabNavigator();

// Dummy data for Trending and Following feeds
const DUMMY_DATA = [
  {
    id: '1',
    userName: 'jamelle',
    verified: true,
    role: 'Web Developer',
    time: '17h',
    userImg: 'https://i.pravatar.cc/150?u=jamelle',
    postBody: "snapshots from yesterday's tech conference in silicon valley that I think are actually impressive the rest.",
    postImg: 'https://picsum.photos/id/1/400/300',
    likes: '3.4K',
    comments: '100',
  },
  {
    id: '2',
    userName: 'Sarahj',
    verified: true,
    role: 'Product Designer',
    time: '17h',
    userImg: 'https://i.pravatar.cc/150?u=sarah',
    postBody: 'just wrapped up an amazing book club discussion over coffee. can\'t wait for the next one!',
    postImg: 'https://picsum.photos/id/2/400/300',
    likes: '3.4K',
    comments: '100',
  }
];

// Reusable Feed component for Trending and Following
const FeedScreen = () => (
  <View style={styles.feedContainer}>
    <FlatList
      data={DUMMY_DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PostCard item={item} />}
      showsVerticalScrollIndicator={false}
      // Important: Extra padding so the last post isn't hidden by the transparent taskbar
      contentContainerStyle={{ paddingBottom: 120 }}
    />
  </View>
);

export default function TopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { 
          fontSize: 14, 
          fontWeight: 'bold', 
          textTransform: 'none' 
        },
        tabBarIndicatorStyle: { 
          backgroundColor: '#007FFF', 
          height: 3,
          borderRadius: 2
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          elevation: 0, // Remove shadow on Android
          shadowOpacity: 0, // Remove shadow on iOS
          borderBottomWidth: 1,
          borderBottomColor: '#f0f0f0',
        },
      }}
    >
      <Tab.Screen name="Trending" component={FeedScreen} />
      <Tab.Screen name="Following" component={FeedScreen} />
      <Tab.Screen name="Clips" component={ClipsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
});