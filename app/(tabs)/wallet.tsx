import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';
import WalletSelector from '@/components/WalletScreen/WalletSelector';
import AccountCard from '@/components/WalletScreen/AccountCard';

export default function WalletScreen() {
  const [selectedView, setSelectedView] = useState<'Assets' | 'Liabilities'>('Assets');

  const assets = [
    { accountName: 'Checking Account', category: 'Bank Account', balance: '$5,000', colors: ['#333', '#FF6F61'] },
    { accountName: 'Savings Account', category: 'Bank Account', balance: '$10,000', colors: ['#333', '#FFB400'] },
    { accountName: 'Investment Fund', category: 'Investments', balance: '$15,000', colors: ['#333', '#8A2BE2'] },
  ];

  const liabilities = [
    { accountName: 'Credit Card', category: 'Credit Cards', balance: '$2,000', colors: ['#333', '#FF6F61'] },
    { accountName: 'Mortgage', category: 'Loans', balance: '$150,000', colors: ['#333', '#1E90FF'] },
    { accountName: 'Car Loan', category: 'Loans', balance: '$10,000', colors: ['#333', '#32CD32'] },
  ];

  const accounts = selectedView === 'Assets' ? assets : liabilities;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Wallet</Text>
      <WalletSelector selected={selectedView} onSelect={setSelectedView} />
      <FlatList
        data={accounts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <AccountCard
            accountName={item.accountName}
            category={item.category}
            balance={item.balance}
            colors={item.colors}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F7F8FA',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
});