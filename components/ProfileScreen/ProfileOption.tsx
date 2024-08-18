import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ProfileOptionProps {
  icon: keyof typeof Ionicons.glyphMap; // Explicitly type the icon prop
  label: string;
  value?: string;
  onPress: () => void;
}

export default function ProfileOption({ icon, label, value, onPress }: ProfileOptionProps) {
  return (
    <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
      <View style={styles.optionIconContainer}>
        <Ionicons name={icon} size={24} color="#333" />
      </View>
      <View style={styles.optionLabelContainer}>
        <Text style={styles.optionLabel}>{label}</Text>
        {value && <Text style={styles.optionValue}>{value}</Text>}
      </View>
      <Ionicons name="chevron-forward" size={20} color="#666" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: 5,
    elevation: 1,
  },
  optionIconContainer: {
    marginRight: 15,
  },
  optionLabelContainer: {
    flex: 1,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  optionValue: {
    fontSize: 14,
    color: '#1E90FF',
    marginTop: 2,
  },
});