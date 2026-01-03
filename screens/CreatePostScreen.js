import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { X } from 'lucide-react-native';

export default function CreatePostScreen({ navigation }) {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <X size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.postBtn, { opacity: text ? 1 : 0.5 }]} 
          disabled={!text}
        >
          <Text style={styles.postBtnText}>Post</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="What's on your mind?"
          style={styles.input}
          multiline
          autoFocus
          value={text}
          onChangeText={setText}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center' },
  postBtn: { backgroundColor: '#007FFF', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 },
  postBtnText: { color: '#fff', fontWeight: 'bold' },
  inputContainer: { padding: 15 },
  input: { fontSize: 18, textAlignVertical: 'top' }
});