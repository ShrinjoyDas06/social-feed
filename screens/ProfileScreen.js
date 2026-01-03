import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function ProfileScreen() {
  // This creates a fake grid of 12 squares for your posts
  const myPosts = Array(12).fill('https://picsum.photos/200');

  return (
    <View style={styles.container}>
      {/* 1. TOP SECTION: Photo and Follower Stats */}
      <View style={styles.profileHeader}>
        <Image 
          source={{ uri: 'https://i.pravatar.cc/150?u=jamelle' }} 
          style={styles.profilePic} 
        />
        <View style={styles.statsRow}>
          <View style={styles.statItem}><Text style={styles.statNum}>12</Text><Text style={styles.statLabel}>Posts</Text></View>
          <View style={styles.statItem}><Text style={styles.statNum}>340</Text><Text style={styles.statLabel}>Followers</Text></View>
          <View style={styles.statItem}><Text style={styles.statNum}>150</Text><Text style={styles.statLabel}>Following</Text></View>
        </View>
      </View>

      {/* 2. BIO SECTION */}
      <View style={styles.bioSection}>
        <Text style={styles.userName}>Jamelle Hudson</Text>
        <Text style={styles.bioText}>Building WiseIN | Web Developer & UI Designer</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* 3. POSTS SECTION: 3-column grid */}
      <FlatList
        data={myPosts}
        numColumns={3}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.gridSquare} />
        )}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  profileHeader: { flexDirection: 'row', padding: 20, alignItems: 'center' },
  profilePic: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#eee' },
  statsRow: { flexDirection: 'row', flex: 1, justifyContent: 'space-around', marginLeft: 10 },
  statItem: { alignItems: 'center' },
  statNum: { fontSize: 18, fontWeight: 'bold' },
  statLabel: { fontSize: 12, color: '#666' },
  bioSection: { paddingHorizontal: 20, marginBottom: 20 },
  userName: { fontSize: 18, fontWeight: 'bold' },
  bioText: { color: '#444', marginVertical: 5 },
  editButton: { backgroundColor: '#f0f0f0', padding: 8, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  editButtonText: { fontWeight: '600' },
  gridSquare: { width: width / 3 - 2, height: width / 3 - 2, margin: 1 }
});