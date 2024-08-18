import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <Ionicons name="person-circle-outline" size={100} color="#1E90FF" />
        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="pencil" size={18} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.profileName}>Puerto Rico</Text>
      <Text style={styles.profileEmail}>youremail@domain.com | +01 234 567 89</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#F5F5F5',
  },
  iconContainer: {
    position: 'relative',
  },
  editIcon: {
    position: 'absolute',
    right: -10,
    bottom: 0,
    backgroundColor: '#1E90FF',
    borderRadius: 20,
    padding: 5,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});