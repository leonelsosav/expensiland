import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CategoryCardProps {
  category: string;
  amount: string;
}

export default function CategoryCard({ category, amount }: CategoryCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>{amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E6F4EA',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 5,
  },
  categoryContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  amountContainer: {
    marginTop: 'auto',
    width: '100%',
    alignItems: 'center',
  },
  amountText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
});