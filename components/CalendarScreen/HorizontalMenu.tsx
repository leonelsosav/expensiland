import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface HorizontalMenuProps {
  selectedMenu: string;
  onSelect: (menu: string) => void;
}

export default function HorizontalMenu({ selectedMenu, onSelect }: HorizontalMenuProps) {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={[styles.menuItem, selectedMenu === 'categories' && styles.selectedMenuItem]}
        onPress={() => onSelect('categories')}
      >
        <Text style={styles.menuText}>Categories</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.menuItem, selectedMenu === 'accounts' && styles.selectedMenuItem]}
        onPress={() => onSelect('accounts')}
      >
        <Text style={styles.menuText}>Accounts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.menuItem, selectedMenu === 'transactions' && styles.selectedMenuItem]}
        onPress={() => onSelect('transactions')}
      >
        <Text style={styles.menuText}>Transactions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.menuItem, selectedMenu === 'reminders' && styles.selectedMenuItem]}
        onPress={() => onSelect('reminders')}
      >
        <Text style={styles.menuText}>Reminders</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  selectedMenuItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#1E90FF',
  },
  menuText: {
    fontSize: 16,
    color: 'black',
  },
});