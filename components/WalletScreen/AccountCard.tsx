import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Swipeable } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

interface AccountCardProps {
  accountName: string;
  category: string;
  balance: string;
  colors: string[];
}

const { width: screenWidth } = Dimensions.get('window');

export default function AccountCard({ accountName, category, balance, colors }: AccountCardProps) {
  const renderRightActions = () => {
    return (
      <View style={styles.deleteContainer}>
        <Ionicons name="trash-outline" size={24} color="white" />
        <Text style={styles.deleteText}>Delete</Text>
      </View>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      onSwipeableRightOpen={() => console.log('Delete account:', accountName)} // Placeholder for delete logic
    >
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
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: screenWidth * 0.85,
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 10,
    alignSelf: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
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
  deleteContainer: {
    backgroundColor: '#FF3B30',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 200, // Matches the height of the card
    marginVertical: 10,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
  },
});