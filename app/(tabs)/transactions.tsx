import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from "react-native";
import TransactionSelector from "@/components/TransactionsScreen/TransactionSelector";
import TransactionCard from "@/components/HomeScreen/TransactionCard/TransactionCard";
import FloatingActionButton from "@/components/TransactionsScreen/FloatingActionButton";
import { Transaction } from "@/shared/models/models";
import { getDBConnection, getItems } from "@/shared/db-service";

export default function TransactionsScreen() {
  const [selectedView, setSelectedView] = useState("History");

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const db = await getDBConnection();
        const TransactionsData = await getItems<Transaction>(
          db,
          "transactions"
        );
        setTransactions(TransactionsData);
      } catch (err) {
        console.error("Failed to fetch accounts:", err);
        setError("Failed to fetch accounts");
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, [selectedView]);

  if (loading) return <Text>Loading transactions...</Text>;
  if (error) return <Text>{error}</Text>;

  const transactionHasPassed = (transaction: Transaction) => {
    switch (selectedView) {
      case "History":
        return new Date(transaction.date) < new Date();
      case "Scheduled":
        return new Date(transaction.date) > new Date();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Transactions</Text>
      <TransactionSelector selected={selectedView} onSelect={setSelectedView} />
      <ScrollView>
        {transactions
          .filter((transaction) => transactionHasPassed(transaction))
          .map((transaction, index) => (
            <TransactionCard
              key={index}
              title={transaction.title}
              amount={transaction.amount}
              date={transaction.date}
            />
          ))}
      </ScrollView>
      <FloatingActionButton onPress={() => alert("Add new transaction")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F7F8FA",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
});
