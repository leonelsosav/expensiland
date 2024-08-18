import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import CalendarView from "@/components/CalendarScreen/CalendarView";
import HorizontalMenu from "@/components/CalendarScreen/HorizontalMenu";
import ContentView from "@/components/CalendarScreen/ContentView";
import moment from "moment";  // Import moment.js for date manipulation

interface Category {
  name: string;
  percentage: number;
  amount: string;
}

interface Account {
  name: string;
  percentage: number;
  balance: string;
}

interface Transaction {
  description: string;
  category: string;
  amount: string;
  account: string;
}

interface DayData {
  categories: Category[];
  accounts: Account[];
  transactions: Transaction[];
  reminders: never[];  // Assuming reminders are not used, hence 'never'
}

type Data = { [key: string]: DayData };

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedMenu, setSelectedMenu] = useState<string>("categories");

  const data: Data = {
    "2024-08-15": {
      categories: [
        { name: "Entertainment", percentage: 100, amount: "$50.00" },
      ],
      accounts: [
        { name: "Savings Account", percentage: 100, balance: "$50.00" },
      ],
      transactions: [
        { description: "Movie Ticket", category: "Entertainment", amount: "-$50.00", account: "Savings Account" },
      ],
      reminders: [],
    },
    "2024-08-18": {
      categories: [
        { name: "Groceries", percentage: 100, amount: "$100.00" },
      ],
      accounts: [
        { name: "Checking Account", percentage: 100, balance: "$100.00" },
      ],
      transactions: [
        { description: "Grocery Shopping", category: "Groceries", amount: "-$100.00", account: "Checking Account" },
      ],
      reminders: [],
    },
  };

  const handleDayPress = (dateString: string) => {
    if (selectedDate === dateString) {
      setSelectedDate(null); // Deselect if already selected
    } else {
      setSelectedDate(dateString); // Select the new date
    }
  };

  const getCurrentMonthTransactions = (): DayData => {
    const currentMonth = "2024-08";  // Replace with dynamic logic as needed
    return Object.keys(data)
      .filter(date => date.startsWith(currentMonth))
      .reduce<DayData>(
        (acc, date) => {
          acc.categories.push(...data[date].categories);
          acc.accounts.push(...data[date].accounts);
          acc.transactions.push(...data[date].transactions);
          acc.reminders.push(...data[date].reminders);
          return acc;
        },
        { categories: [], accounts: [], transactions: [], reminders: [] }
      );
  };

  const renderData = () => {
    if (selectedDate) {
      // If a specific date is selected, show data for that date
      const dayData = data[selectedDate];
      if (!dayData) {
        return <Text style={styles.placeholder}>No data available for this date.</Text>;
      }
      return <ContentView selectedDate={selectedDate} selectedMenu={selectedMenu} data={{ [selectedDate]: dayData }} />;
    } else {
      // If no specific date is selected, show all data for the month
      const monthData = getCurrentMonthTransactions();
      return <ContentView selectedDate={null} selectedMenu={selectedMenu} data={{ '2024-08': monthData }} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calendarContainer}>
        <CalendarView
          selectedDate={selectedDate}
          onDateSelect={handleDayPress}
          data={data}
        />
      </View>
      <HorizontalMenu selectedMenu={selectedMenu} onSelect={setSelectedMenu} />
      <View style={styles.contentContainer}>
        {renderData()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  calendarContainer: {
    flex: 2,
  },
  contentContainer: {
    flex: 3,
    backgroundColor: "#FFF",
    padding: 10,
  },
  placeholder: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    color: '#666',
  },
});