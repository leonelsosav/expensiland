import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FloatingActionButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Ionicons name="add" size={28} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#1E90FF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});