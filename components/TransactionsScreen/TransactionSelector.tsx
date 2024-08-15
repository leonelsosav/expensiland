import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TransactionSelectorProps {
  selected: string;
  onSelect: (option: string) => void;
}

export default function TransactionSelector({ selected, onSelect }: TransactionSelectorProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.option, selected === 'History' && styles.selectedOption]}
        onPress={() => onSelect('History')}
      >
        <Text style={[styles.optionText, selected === 'History' && styles.selectedOptionText]}>
          History
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, selected === 'Scheduled' && styles.selectedOption]}
        onPress={() => onSelect('Scheduled')}
      >
        <Text style={[styles.optionText, selected === 'Scheduled' && styles.selectedOptionText]}>
          Scheduled
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  selectedOption: {
    backgroundColor: '#1E90FF',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});