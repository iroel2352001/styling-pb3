import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Bagian Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Halo,</Text>
          <Text style={styles.name}>Khaerul Anwar</Text>
          <Text style={styles.studentId}>( 23.52.0011 )</Text>
        </View>

        {/* Bagian Menu dengan Icon */}
        <View style={styles.menuContainer}>
          <View style={styles.menuItemContainer}>
            <TouchableOpacity style={styles.menuItem}>
              <Image source={require('../../assets/icons/krs.png')} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.menuText}>KRS</Text>
          </View>
          <View style={styles.menuItemContainer}>
            <TouchableOpacity style={styles.menuItem}>
              <Image source={require('../../assets/icons/nilai.png')} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.menuText}>Nilai</Text>
          </View>
          <View style={styles.menuItemContainer}>
            <TouchableOpacity style={styles.menuItem}>
              <Image source={require('../../assets/icons/presensi.png')} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.menuText}>Presensi</Text>
          </View>
          <View style={styles.menuItemContainer}>
            <TouchableOpacity style={[styles.menuItem, { backgroundColor: '#dcdcdc' }]}>
              <Image source={require('../../assets/icons/lainnya.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Jadwal Kuliah */}
        <View style={styles.scheduleContainer}>
          <Text style={styles.scheduleTitle}>Jadwal Kuliah</Text>
          <Text style={styles.scheduleText}>Jadwal kuliah tidak tersedia</Text>
        </View>

        {/* Footer Navigasi */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerItem} onPress={() => setActiveTab('Home')}>
            {activeTab === 'Home' && <View style={styles.activeBox} />}
            <Image
              source={
                activeTab === 'Home'
                  ? require('../../assets/icons/home-active.png')
                  : require('../../assets/icons/home.png')
              }
              style={styles.footerIcon}
            />
            <Text style={[styles.footerText, activeTab === 'Home' && styles.activeFooterText]}>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.footerItem} onPress={() => setActiveTab('Berita')}>
            {activeTab === 'Berita' && <View style={styles.activeBox} />}
            <Image
              source={
                activeTab === 'Berita'
                  ? require('../../assets/icons/news-active.png')
                  : require('../../assets/icons/news.png')
              }
              style={styles.footerIcon}
            />
            <Text style={[styles.footerText, activeTab === 'Berita' && styles.activeFooterText]}>
              Berita
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.footerItem} onPress={() => setActiveTab('Profile')}>
            {activeTab === 'Profile' && <View style={styles.activeBox} />}
            <Image
              source={
                activeTab === 'Profile'
                  ? require('../../assets/icons/profile-active.png')
                  : require('../../assets/icons/profile.png')
              }
              style={styles.footerIcon}
            />
            <Text style={[styles.footerText, activeTab === 'Profile' && styles.activeFooterText]}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 0,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
    marginTop: 20,
  },
  greeting: {
    fontSize: 20,
    color: '#005674',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  studentId: {
    fontSize: 16,
    color: '#005674',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    padding: 20,
    borderColor: '#dcdcdc',
    borderWidth: 2,
    borderRadius: 10,
  },
  menuItemContainer: {
    alignItems: 'center',
  },
  menuItem: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00274e',
    borderRadius: 10,
  },
  menuText: {
    fontSize: 14,
    fontWeight: '100',
    color: '#00274e',
    marginTop: 5,
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  scheduleContainer: {
    marginBottom: 20,
  },
  scheduleTitle: {
    paddingBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  scheduleText: {
    fontSize: 14,
    color: '#888',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#dcdcdc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  },
  footerItem: {
    alignItems: 'center',
    position: 'relative',
  },
  footerIcon: {
    marginTop: 4,
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  footerText: {
    fontSize: 14,
    color: '#97a2ab',
  },
  activeFooterText: {
    color: '#00264c',
  },
  activeBox: {
    position: 'absolute',
    top: -10,
    width: 90,
    height: 4,
    backgroundColor: '#00264c',
    borderRadius: 10,
  },
});

export default HomeScreen;
