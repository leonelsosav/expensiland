import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import AccountsSection from "@/components/HomeScreen/AccountCard/AccountsSection";
import CategoriesSection from "@/components/HomeScreen/CategoryCard/CategoriesSection";
import TransactionsSection from "@/components/HomeScreen/TransactionCard/TransactionsSection";
import {
  initializeDatabase,
  logAllTableData,
} from "@/shared/DB/initializeDatabase";
import { dropTable } from "@/shared/db-service";
import { populateTables } from "@/shared/DB/seedData";

export default function MainScreen() {
  const [selectedAccountId, setSelectedAccountId] = useState(1);

  useEffect(() => {
    const initialize = async () => {
      const db = await initializeDatabase();
      // await dropTable(db, "accounts");
      // await dropTable(db, "transactions");
      // await dropTable(db, "budgets");
      // await dropTable(db, "categories");
      // await dropTable(db, "recurring_transactions");
      // await dropTable(db, "exchange_rates");
      // await populateTables(db);
      await logAllTableData(db);
    };
    initialize();
  }, []);

  const handleAccountSelect = (accountID: number) => {
    setSelectedAccountId(accountID);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <ScrollView>
        <AccountsSection onSelect={handleAccountSelect} />
        {/* <CategoriesSection selectedAccountIndex={selectedAccountIndex} /> */}
        <TransactionsSection selectedAccountId={selectedAccountId} />
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
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
});
