import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStack from './navigation/MainStack';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}