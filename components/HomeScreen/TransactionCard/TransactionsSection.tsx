import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import TransactionCard from "./TransactionCard";
import { Link } from "expo-router";
import { Transaction } from "@/shared/models/models";
import { getDBConnection, getItems } from "@/shared/db-service";

interface TransactionsSectionProps {
  selectedAccountId: number;
}

export default function TransactionsSection({
  selectedAccountId,
}: TransactionsSectionProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const initialize = async () => {
      const db = await getDBConnection();
      const transactions = await getItems<Transaction>(
        db,
        "transactions",
        ["*"],
        `account_id = ${selectedAccountId}`
      );
      setTransactions(transactions);
    };
    initialize();
  }, [selectedAccountId]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transactions</Text>
      {transactions.map((transaction, index) => (
        <TransactionCard
          key={index}
          title={transaction.title}
          amount={transaction.amount}
          date={transaction.date}
        />
      ))}
      <Link href="/transactions" style={styles.seeMore}>
        See more
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 30,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    marginLeft: 20,
  },
  seeMore: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E90FF",
    textAlign: "center",
    marginTop: 15,
  },
});
