import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  Platform, 
  StatusBar 
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  Home, 
  MessageSquare, 
  Compass, 
  Users, 
  User, 
  Menu, 
  Search, 
  Bell, 
  PenSquare 
} from 'lucide-react-native';

import TopTabNavigator from './TopTabNavigator';
import SearchScreen from '../screens/SearchScreen';
import AlertScreen from '../screens/AlertScreen';
import CreatePostScreen from '../screens/CreatePostScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Placeholder = ({ route }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
    <Text>{route.name} Screen</Text>
  </View>
);

function TabGroup({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <SafeAreaView style={styles.safeArea}>
        {/* --- TOP HEADER --- */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Menu size={26} color="#333" strokeWidth={1.5} />
          </TouchableOpacity>
          
          <View style={styles.logoContainer}>
            <View style={styles.logoW}>
              <Text style={styles.wText}>W</Text>
            </View>
            <Text style={styles.logoText}>WiseIN</Text>
          </View>

          <View style={styles.navIcons}>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Search size={24} color="#333" strokeWidth={1.5} style={{ marginRight: 18 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Alerts')}>
              <Bell size={24} color="#333" strokeWidth={1.5} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* --- BOTTOM TAB BAR (Lowered & Transparent) --- */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#007FFF',
          tabBarInactiveTintColor: '#666',
          tabBarStyle: styles.loweredTabBar, // Applied the new styling here
        }}
      >
        <Tab.Screen 
          name="HomeTab" 
          component={TopTabNavigator} 
          options={{ tabBarIcon: ({ color }) => <Home size={28} color={color} /> }} 
        />
        <Tab.Screen name="Chat" component={Placeholder} options={{ tabBarIcon: ({ color }) => <MessageSquare size={28} color={color} /> }} />
        <Tab.Screen name="Explore" component={Placeholder} options={{ tabBarIcon: ({ color }) => <Compass size={28} color={color} /> }} />
        <Tab.Screen name="Groups" component={Placeholder} options={{ tabBarIcon: ({ color }) => <Users size={28} color={color} /> }} />
        <Tab.Screen name="Profile" component={Placeholder} options={{ tabBarIcon: ({ color }) => <User size={28} color={color} /> }} />
      </Tab.Navigator>

      {/* --- FLOATING ACTION BUTTON --- */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => navigation.navigate('CreatePost')}
      >
        <PenSquare color="white" size={26} strokeWidth={2} />
      </TouchableOpacity>
    </View>
  );
}

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabGroup} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Alerts" component={AlertScreen} options={{ headerShown: true }} />
      <Stack.Screen 
        name="CreatePost" 
        component={CreatePostScreen} 
        options={{ presentation: 'modal' }} 
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logoW: { backgroundColor: '#4A90E2', width: 28, height: 28, borderRadius: 6, justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  wText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  logoText: { fontSize: 22, fontWeight: 'bold', color: '#007FFF' },
  navIcons: { flexDirection: 'row', alignItems: 'center' },
  
  // LOWERED TAB BAR STYLES
  loweredTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    height: 65, // Reduced height to pull icons lower
    paddingBottom: 0, // Removed padding to sit at the absolute bottom
    borderTopWidth: 0,
    elevation: 0,
  },

  fab: {
    position: 'absolute',
    bottom: 85, // Lowered slightly to maintain the gap with the new tab bar height
    right: 20,
    backgroundColor: '#000',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 999,
  },
});