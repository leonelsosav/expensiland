import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import AccountsSection from "@/components/HomeScreen/AccountCard/AccountsSection";
import CategoriesSection from "@/components/HomeScreen/CategoryCard/CategoriesSection";
import TransactionsSection from "@/components/HomeScreen/TransactionCard/TransactionsSection";

export default function MainScreen() {
  const [selectedAccountIndex, setSelectedAccountIndex] = useState(0);

  const handleAccountSelect = (index: number) => {
    setSelectedAccountIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <ScrollView>
        <AccountsSection onSelect={handleAccountSelect} />
        <CategoriesSection selectedAccountIndex={selectedAccountIndex} />
        <TransactionsSection selectedAccountIndex={selectedAccountIndex} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
});