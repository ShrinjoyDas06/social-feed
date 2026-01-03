import React from 'react';
import { View, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';

export default function SearchScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <ChevronLeft onPress={() => navigation.goBack()} size={28} color="#000" />
        <TextInput 
          placeholder="Search WiseIN..." 
          style={styles.input} 
          autoFocus 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', padding: 15 },
  input: { flex: 1, backgroundColor: '#f0f0f0', marginLeft: 10, padding: 10, borderRadius: 8 }
});