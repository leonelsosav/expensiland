import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AccountsSection from '@/components/AccountCard/AccountsSection'; 
import CategoriesSection from '@/components/CategoryCard/CategoriesSection';

export default function MainScreen() {
  const [selectedAccountIndex, setSelectedAccountIndex] = useState(0);

  const handleAccountSelect = (index: number) => {
    setSelectedAccountIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AccountsSection onSelect={handleAccountSelect} />
      <CategoriesSection selectedAccountIndex={selectedAccountIndex} />
      {/* Other components like TransactionsPreview will go here */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,  // Added padding to avoid cropping
    backgroundColor: '#F7F8FA',
  },
});