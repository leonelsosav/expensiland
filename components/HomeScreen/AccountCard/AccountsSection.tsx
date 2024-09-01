import React, { useEffect, useRef, useState } from "react";
import { View, FlatList, StyleSheet, Dimensions, Text } from "react-native";
import AccountCard from "./AccountCard";
import { getDBConnection, getItems } from "@/shared/db-service";
import { Account } from "@/shared/models/models";

const { width: screenWidth } = Dimensions.get("window");

interface AccountsSectionProps {
  onSelect: (accountId: number) => void;
}

export default function AccountsSection({ onSelect }: AccountsSectionProps) {
  const [selectedId, setSelectedId] = useState(1);
  const flatListRef = useRef<FlatList>(null);

  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const db = await getDBConnection();
        const accountsData = await getItems<Account>(db, "accounts");
        setAccounts(accountsData);
      } catch (err) {
        console.error("Failed to fetch accounts:", err);
        setError("Failed to fetch accounts");
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  if (loading) return <Text>Loading accounts...</Text>;
  if (error) return <Text>{error}</Text>;

  const colorPairs = [
    ["#333", "#FF6F61"],
    ["#333", "#FFB400"],
    ["#333", "#8A2BE2"],
    ["#333", "#1E90FF"],
    ["#333", "#32CD32"],
    ["#333", "#FF1493"],
    ["#333", "#00FA9A"],
    ["#333", "#FFD700"],
    ["#333", "#4B0082"],
    ["#333", "#DC143C"],
  ];

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (screenWidth * 0.75 + 20));
    setSelectedId(accounts[index].id);
    onSelect(accounts[index].id);
  };

  const handleSelectCard = (AccountId: number) => {
    setSelectedId(AccountId);
    flatListRef.current?.scrollToIndex({ animated: true, index: AccountId });
    onSelect(AccountId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Accounts</Text>
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
          <View
            style={[
              styles.cardContainer,
              { opacity: selectedId === accounts[index].id ? 1 : 0.5 },
            ]}
          >
            <AccountCard
              key={index}
              name={item.name}
              type={item.type}
              balance={item.balance}
              colors={colorPairs[index % colorPairs.length]}
              onPress={() => handleSelectCard(item.id)}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        onScrollToIndexFailed={(info) => {
          setTimeout(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
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
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  contentContainerStyle: {
    paddingHorizontal: (screenWidth - screenWidth * 0.75) / 2,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    marginLeft: 20,
  },
});
