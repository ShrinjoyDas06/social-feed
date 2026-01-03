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
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
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

// Import your custom screens and navigators
import TopTabNavigator from './TopTabNavigator';
import SearchScreen from '../screens/SearchScreen';
import AlertScreen from '../screens/AlertScreen';
import CreatePostScreen from '../screens/CreatePostScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Functional grouping for the Bottom Tabs
function TabGroup({ navigation, route }) {
  // Logic to hide the FAB when the sub-tab is 'Clips'
  const activeSubTab = getFocusedRouteNameFromRoute(route) ?? 'Trending';
  const showFAB = activeSubTab !== 'Clips';

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <SafeAreaView style={styles.safeArea}>
        {/* Top Header - borderBottomWidth: 0 removes the grid line */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Menu size={26} color="#333" />
          </TouchableOpacity>
          
          <View style={styles.logoContainer}>
            <View style={styles.logoW}>
              <Text style={styles.wText}>W</Text>
            </View>
            <Text style={styles.logoText}>WiseIN</Text>
          </View>

          <View style={styles.navIcons}>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Search size={24} color="#333" style={{ marginRight: 18 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Alerts')}>
              <Bell size={24} color="#333" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#007FFF',
          tabBarInactiveTintColor: '#666',
          tabBarStyle: styles.loweredTabBar,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={TopTabNavigator} 
          options={{ tabBarIcon: ({ color }) => <Home size={28} color={color} /> }} 
        />
        <Tab.Screen name="Chat" component={View} options={{ tabBarIcon: ({ color }) => <MessageSquare size={28} color={color} /> }} />
        <Tab.Screen name="Explore" component={View} options={{ tabBarIcon: ({ color }) => <Compass size={28} color={color} /> }} />
        <Tab.Screen name="Groups" component={View} options={{ tabBarIcon: ({ color }) => <Users size={28} color={color} /> }} />
        <Tab.Screen name="Profile" component={View} options={{ tabBarIcon: ({ color }) => <User size={28} color={color} /> }} />
      </Tab.Navigator>

      {/* FAB: Conditional rendering based on active tab */}
      {showFAB && (
        <TouchableOpacity 
          style={styles.fab} 
          onPress={() => navigation.navigate('CreatePost')}
        >
          <PenSquare color="white" size={26} strokeWidth={2} />
        </TouchableOpacity>
      )}
    </View>
  );
}

// Root Navigator
export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabGroup} />
      <Stack.Screen name="Search" component={SearchScreen} />
      
      {/* headerShown: false allows AlertsScreen's custom back button to work */}
      <Stack.Screen 
        name="Alerts" 
        component={AlertScreen} 
        options={{ headerShown: false }} 
      />
      
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    height: 60, 
    borderBottomWidth: 0, // Removes the grid line
    elevation: 0,         // Removes Android system shadow
    shadowOpacity: 0,     // Removes iOS system shadow
    backgroundColor: '#fff'
  },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logoW: { backgroundColor: '#4A90E2', width: 28, height: 28, borderRadius: 6, justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  wText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  logoText: { fontSize: 22, fontWeight: 'bold', color: '#007FFF' },
  navIcons: { flexDirection: 'row', alignItems: 'center' },
  loweredTabBar: { 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
    height: 65, 
    borderTopWidth: 0, 
    elevation: 0 
  },
  fab: { 
    position: 'absolute', 
    bottom: 85, 
    right: 20, 
    backgroundColor: '#000', 
    width: 56, 
    height: 56, 
    borderRadius: 28, 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 5, 
    zIndex: 999 
  }
});