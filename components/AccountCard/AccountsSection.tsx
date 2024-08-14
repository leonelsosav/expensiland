import React, { useRef, useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import AccountCard from './AccountCard'; // Adjust the path as needed

const { width: screenWidth } = Dimensions.get('window');

interface AccountsSectionProps {
  onSelect: (index: number) => void; // Handle account selection
}

export default function AccountsSection({ onSelect }: AccountsSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const colorPairs = [
    ['#333', '#FF6F61'],  // Original red accent
    ['#333', '#FFB400'],  // Orange
    ['#333', '#8A2BE2'],  // BlueViolet
    ['#333', '#1E90FF'],  // DodgerBlue
    ['#333', '#32CD32'],  // LimeGreen
    ['#333', '#FF1493'],  // DeepPink
    ['#333', '#00FA9A'],  // MediumSpringGreen
    ['#333', '#FFD700'],  // Gold
    ['#333', '#4B0082'],  // Indigo
    ['#333', '#DC143C'],  // Crimson
  ];

  const accounts = [
    { accountName: 'Personal Checking', category: 'Debit', balance: '$1,230.45' },
    { accountName: 'Savings Account', category: 'Savings', balance: '$8,920.00' },
    { accountName: 'Investment Fund', category: 'Investment', balance: '$15,340.00' },
    { accountName: 'Business Account', category: 'Credit', balance: '$3,245.67' },
  ];

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (screenWidth * 0.75 + 20));
    setSelectedIndex(index);
    onSelect(index);  // Notify the parent of the selected index
  };

  const handleSelectCard = (index: number) => {
    setSelectedIndex(index);
    flatListRef.current?.scrollToIndex({ animated: true, index });
    onSelect(index);  // Notify the parent of the selected index
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={accounts}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        snapToInterval={screenWidth * 0.75 + 20}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScroll}
        renderItem={({ item, index }) => (
          <View style={[styles.cardContainer, { opacity: selectedIndex === index ? 1 : 0.5 }]}>
            <AccountCard
              key={index}
              accountName={item.accountName}
              category={item.category}
              balance={item.balance}
              colors={colorPairs[index % colorPairs.length]}
              onPress={() => handleSelectCard(index)} // Handle card selection
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        onScrollToIndexFailed={(info) => {
          setTimeout(() => {
            flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
          }, 500);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  cardContainer: {
    width: screenWidth * 0.75,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  contentContainerStyle: {
    paddingHorizontal: (screenWidth - screenWidth * 0.75) / 2,
  },
});