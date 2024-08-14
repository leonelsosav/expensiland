import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import AccountsSection from "@/components/AccountCard/AccountsSection";
import CategoriesSection from "@/components/CategoryCard/CategoriesSection";
import TransactionsSection from "@/components/TransactionCard/TransactionsSection";

export default function MainScreen() {
  const [selectedAccountIndex, setSelectedAccountIndex] = useState(0);

  const handleAccountSelect = (index: number) => {
    setSelectedAccountIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
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
});
