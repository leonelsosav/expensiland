import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CategoryCard from './CategoryCard'; // Adjust the path as needed

interface CategoriesSectionProps {
  selectedAccountIndex: number;
}

export default function CategoriesSection({ selectedAccountIndex }: CategoriesSectionProps) {
  const [categories, setCategories] = useState<{ category: string, amount: string }[]>([]);

  // Dummy category data for each account
  const accountCategories = [
    [
      { category: 'Groceries', amount: '$250.00' },
      { category: 'Utilities', amount: '$120.00' },
      { category: 'Dining Out', amount: '$85.50' },
      { category: 'Transportation', amount: '$60.00' },
    ],
    [
      { category: 'Investments', amount: '$15,000.00' },
      { category: 'Stocks', amount: '$8,500.00' },
      { category: 'Real Estate', amount: '$150,000.00' },
      { category: 'Bonds', amount: '$10,000.00' },
    ],
    [
      { category: 'Entertainment', amount: '$300.00' },
      { category: 'Digital Subscriptions', amount: '$45.00' },
      { category: 'Travel', amount: '$1,200.00' },
      { category: 'Gaming', amount: '$150.00' },
    ],
    [
      { category: 'Business Expenses', amount: '$5,000.00' },
      { category: 'Supplies', amount: '$2,300.00' },
      { category: 'Marketing', amount: '$1,800.00' },
      { category: 'Salaries', amount: '$25,000.00' },
    ],
  ];

  useEffect(() => {
    // Update categories based on the selected account
    setCategories(accountCategories[selectedAccountIndex]);
  }, [selectedAccountIndex]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category.category} amount={category.amount} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});