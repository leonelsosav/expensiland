import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ContentViewProps {
  selectedDate: string | null;
  selectedMenu: string;
  data: any;
}

export default function ContentView({ selectedDate, selectedMenu, data }: ContentViewProps) {
  const dayData = selectedDate ? data[selectedDate] : null;

  if (!dayData) {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>No data available for this date.</Text>
      </View>
    );
  }

  const renderContent = () => {
    if (!dayData && !selectedDate) {
      return (
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>No data available for this month.</Text>
        </View>
      );
    }
  
    const contentData = selectedDate ? dayData : data['2024-08'];
  
    switch (selectedMenu) {
      case 'categories':
        return contentData.categories.map((category: any, index: any) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{category.name} - {category.percentage}% - {category.amount}</Text>
          </View>
        ));
      case 'accounts':
        return contentData.accounts.map((account: any, index: any) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{account.name} - {account.percentage}% - {account.balance}</Text>
          </View>
        ));
      case 'transactions':
        return contentData.transactions.map((transaction: any, index: any) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{transaction.description} - {transaction.category} - {transaction.amount} - {transaction.account}</Text>
          </View>
        ));
      case 'reminders':
        return contentData.reminders.length > 0 ? (
          contentData.reminders.map((reminder: any, index: any) => (
            <View key={index} style={styles.item}>
              <Text style={styles.itemText}>{reminder.description} - {reminder.amount} - {reminder.account} - Due on {reminder.dueDate}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.contentText}>No reminders available.</Text>
        );
      default:
        return <Text style={styles.contentText}>Select an option.</Text>;
    }
  };

  return (
    <View style={styles.contentContainer}>
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 5,
  },
  contentText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  item: {
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: 'black',
  },
});