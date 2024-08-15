import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface WalletSelectorProps {
  selected: 'Assets' | 'Liabilities';
  onSelect: (view: 'Assets' | 'Liabilities') => void;
}

export default function WalletSelector({ selected, onSelect }: WalletSelectorProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.option, selected === 'Assets' && styles.selectedOption]}
        onPress={() => onSelect('Assets')}
      >
        <Text style={[styles.optionText, selected === 'Assets' && styles.selectedOptionText]}>
          Assets
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, selected === 'Liabilities' && styles.selectedOption]}
        onPress={() => onSelect('Liabilities')}
      >
        <Text style={[styles.optionText, selected === 'Liabilities' && styles.selectedOptionText]}>
          Liabilities
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