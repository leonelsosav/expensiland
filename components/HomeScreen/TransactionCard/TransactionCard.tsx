import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TransactionCardProps {
  title: string;
  amount: number;
  time: string;
}

export default function TransactionCard({ title, amount, time }: TransactionCardProps) {
  // Select an appropriate icon based on the title
  const getIconName = () => {
    if (title.toLowerCase().includes('car')) {
      return 'car';
    } else if (title.toLowerCase().includes('mortgage')) {
      return 'home';
    } else if (title.toLowerCase().includes('loan')) {
      return 'cash';
    } else {
      return 'card';
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons name={getIconName()} size={24} color="#333" />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>${amount.toLocaleString()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },
  iconContainer: {
    backgroundColor: '#E6E6E6',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  time: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  amountContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  percentage: {
    fontSize: 12,
    color: '#FF4500', // Red color for negative percentage
    marginTop: 5,
  },
});