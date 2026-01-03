// screens/ClipsScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Heart, MessageCircle, Share2, Bookmark, CheckCircle2 } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

const videoSource = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function ClipsScreen() {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <View style={styles.container}>
      {/* 1. Full Screen Video */}
      <VideoView 
        style={styles.video} 
        player={player} 
        allowsFullscreen={false} 
        allowsPictureInPicture={false}
      />

      {/* 2. Right Side Interaction Bar */}
      <View style={styles.sideBar}>
        <TouchableOpacity style={styles.sideIcon}>
          <Heart color="white" fill="rgba(255,255,255,0.3)" size={32} />
          <Text style={styles.iconText}>24.3K</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.sideIcon}>
          <MessageCircle color="white" size={32} />
          <Text style={styles.iconText}>1.2K</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sideIcon}>
          <Share2 color="white" size={32} />
          <Text style={styles.iconText}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sideIcon}>
          <Bookmark color="white" size={32} />
          <Text style={styles.iconText}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* 3. Bottom User Info Overlay */}
      <View style={styles.bottomOverlay}>
        <View style={styles.userRow}>
          <Image source={{ uri: 'https://i.pravatar.cc/100?u=jamelle' }} style={styles.avatar} />
          <View style={styles.userDetails}>
            <View style={styles.nameContainer}>
              <Text style={styles.userName}>jamelle</Text>
              <CheckCircle2 size={14} color="#007FFF" fill="#007FFF" />
            </View>
            <Text style={styles.role}>Web Developer • 17h</Text>
          </View>
          <TouchableOpacity style={styles.followBtn}>
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.caption} numberOfLines={2}>
          snapshots from yesterday's tech conference in silicon valley that I think are ac...<Text style={styles.seeMore}>See more</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  video: { width: width, height: height },
  sideBar: {
    position: 'absolute',
    right: 15,
    bottom: 120, // Adjusted to sit above the taskbar
    alignItems: 'center',
  },
  sideIcon: { alignItems: 'center', marginBottom: 20 },
  iconText: { color: 'white', fontSize: 12, marginTop: 4, fontWeight: '500' },
  bottomOverlay: {
    position: 'absolute',
    bottom: 80, // Sits exactly above the taskbar
    left: 15,
    right: 80,
  },
  userRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: 'white' },
  userDetails: { marginLeft: 10, flex: 1 },
  nameContainer: { flexDirection: 'row', alignItems: 'center' },
  userName: { color: 'white', fontWeight: 'bold', fontSize: 16, marginRight: 5 },
  role: { color: 'rgba(255,255,255,0.8)', fontSize: 12 },
  followBtn: { backgroundColor: '#007FFF', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15 },
  followText: { color: 'white', fontWeight: 'bold', fontSize: 12 },
  caption: { color: 'white', fontSize: 14, lineHeight: 18 },
  seeMore: { fontWeight: 'bold', color: 'rgba(255,255,255,0.7)' }
});