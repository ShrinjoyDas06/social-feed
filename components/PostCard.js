import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal, CheckCircle2 } from 'lucide-react-native';

export default function PostCard({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: item.userImg }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.userName}>{item.userName}</Text>
            {item.verified && <CheckCircle2 size={14} color="#007FFF" fill="#007FFF" style={{marginLeft: 4}} />}
          </View>
          <Text style={styles.userDetails}>{item.role} • {item.time}</Text>
        </View>
        <MoreHorizontal size={20} color="#666" />
      </View>
      <Text style={styles.postText}>{item.postBody}</Text>
      <Image source={{ uri: item.postImg }} style={styles.postImage} />
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <TouchableOpacity style={styles.actionBtn}><Heart size={20} color="#666" /><Text style={styles.actionText}>{item.likes}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}><MessageCircle size={20} color="#666" /><Text style={styles.actionText}>{item.comments}</Text></TouchableOpacity>
        </View>
        <View style={styles.footerRight}>
          <Share size={20} color="#666" style={{marginRight: 20}} />
          <Bookmark size={20} color="#666" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', marginBottom: 8, paddingVertical: 12 },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, marginBottom: 10 },
  avatar: { width: 45, height: 45, borderRadius: 22.5 },
  userInfo: { flex: 1, marginLeft: 10 },
  nameRow: { flexDirection: 'row', alignItems: 'center' },
  userName: { fontWeight: 'bold', fontSize: 15 },
  userDetails: { color: '#666', fontSize: 12 },
  postText: { paddingHorizontal: 15, marginBottom: 10, lineHeight: 20 },
  postImage: { width: '100%', height: 250 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 12 },
  footerLeft: { flexDirection: 'row' },
  actionBtn: { flexDirection: 'row', alignItems: 'center', marginRight: 20 },
  actionText: { marginLeft: 5, color: '#666' },
  footerRight: { flexDirection: 'row' }
});