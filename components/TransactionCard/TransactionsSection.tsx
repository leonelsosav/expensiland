import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import TransactionCard from './TransactionCard'; // Adjust the path as needed
import { Link } from 'expo-router';

interface TransactionsSectionProps {
  selectedAccountIndex: number;
}

export default function TransactionsSection({ selectedAccountIndex }: TransactionsSectionProps) {
  const [transactions, setTransactions] = useState<{ title: string; amount: string; time: string }[]>([]);

  // Dummy transaction data for each account
  const accountTransactions = [
    [
      { title: 'Car loans', amount: '$13.10', time: '9:01 am' },
      { title: 'Grocery shopping', amount: '$45.00', time: '12:15 pm' },
      { title: 'Dining out', amount: '$85.50', time: '7:45 pm' },
      { title: 'Transportation', amount: '$60.00', time: '8:20 am' },
      { title: 'Electricity bill', amount: '$120.00', time: '5:00 pm' },
    ],
    [
      { title: 'Stocks purchase', amount: '$500.00', time: '10:01 am' },
      { title: 'Real estate investment', amount: '$15,000.00', time: '1:30 pm' },
      { title: 'Bond purchase', amount: '$1,000.00', time: '4:45 pm' },
      { title: 'Dividend income', amount: '$150.00', time: '9:10 am' },
      { title: 'Cryptocurrency trade', amount: '$750.00', time: '11:00 am' },
    ],
    [
      { title: 'Netflix subscription', amount: '$15.00', time: '2:00 pm' },
      { title: 'Amazon Prime', amount: '$12.99', time: '5:30 pm' },
      { title: 'Spotify subscription', amount: '$9.99', time: '8:00 am' },
      { title: 'HBO Max', amount: '$14.99', time: '6:45 pm' },
      { title: 'Apple Music', amount: '$9.99', time: '7:15 pm' },
    ],
    [
      { title: 'Office supplies', amount: '$300.00', time: '3:15 pm' },
      { title: 'Employee salary', amount: '$5,000.00', time: '6:00 pm' },
      { title: 'Marketing campaign', amount: '$2,000.00', time: '10:30 am' },
      { title: 'Business lunch', amount: '$150.00', time: '12:00 pm' },
      { title: 'Travel expenses', amount: '$1,500.00', time: '9:00 am' },
    ],
  ];

  useEffect(() => {
    // Update transactions based on the selected account
    setTransactions(accountTransactions[selectedAccountIndex].slice(0, 5));
  }, [selectedAccountIndex]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transactions</Text>
        {transactions.map((transaction, index) => (
          <TransactionCard
            key={index}
            title={transaction.title}
            amount={transaction.amount}
            time={transaction.time}
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
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginLeft: 20,
  },
  seeMore: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E90FF',
    textAlign: 'center',
    marginTop: 15,
  },
});