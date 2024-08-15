import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from "react-native";
import TransactionSelector from "@/components/TransactionsScreen/TransactionSelector";
import TransactionCard from "@/components/HomeScreen/TransactionCard/TransactionCard";
import FloatingActionButton from "@/components/TransactionsScreen/FloatingActionButton";

export default function TransactionsScreen() {
  const [selectedView, setSelectedView] = useState("History");

  // Hardcoded transactions data for History and Scheduled
  const historyTransactions = [
    { title: "Car loans", amount: "$13.10", time: "9:01 am" },
    { title: "Grocery shopping", amount: "$45.00", time: "12:15 pm" },
    { title: "Dining out", amount: "$85.50", time: "7:45 pm" },
    { title: "Transportation", amount: "$60.00", time: "8:20 am" },
    { title: "Electricity bill", amount: "$120.00", time: "5:00 pm" },
  ];

  const scheduledTransactions = [
    { title: "Rent payment", amount: "$1,500.00", time: "Oct 1, 9:00 am" },
    { title: "Credit card bill", amount: "$200.00", time: "Oct 5, 11:00 am" },
    { title: "Car insurance", amount: "$300.00", time: "Oct 10, 10:30 am" },
    { title: "Gym membership", amount: "$50.00", time: "Oct 15, 8:00 am" },
    { title: "Internet bill", amount: "$60.00", time: "Oct 20, 2:00 pm" },
  ];

  const transactions =
    selectedView === "History"
      ? [...historyTransactions, ...historyTransactions]
      : [...scheduledTransactions, ...scheduledTransactions];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Transactions</Text>
      <TransactionSelector selected={selectedView} onSelect={setSelectedView} />
      <ScrollView>
        {transactions.map((transaction, index) => (
          <TransactionCard
            key={index}
            title={transaction.title}
            amount={transaction.amount}
            time={transaction.time}
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
