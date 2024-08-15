import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface AccountCardProps {
  accountName: string;
  category: string;
  balance: string;
  colors: string[];
  onPress: () => void;  // Add onPress prop for handling taps
}

const { width: screenWidth } = Dimensions.get('window');

export default function AccountCard({ accountName, category, balance, colors, onPress }: AccountCardProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.cardContainer}>
        <LinearGradient
          colors={colors}
          start={{ x: 0.2, y: 0.2 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.card}
        >
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Balance</Text>
            <Text style={styles.balance}>{balance}</Text>
          </View>
          <View style={styles.cardInfoContainer}>
            <Text style={styles.accountName}>{accountName}</Text>
            <Text style={styles.category}>{category}</Text>
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
  },
  card: {
    width: screenWidth * 0.75,
    height: 200,
    borderRadius: 15,
    padding: 20,
    justifyContent: 'space-between',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
  balanceContainer: {
    alignItems: 'flex-end',
  },
  balanceLabel: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.8,
  },
  balance: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardInfoContainer: {
    marginTop: 30,
  },
  accountName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  category: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
});