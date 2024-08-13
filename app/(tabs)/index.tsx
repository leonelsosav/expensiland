import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View } from "react-native";

export default function Index() {
  const colorScheme = useColorScheme();
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors[colorScheme ?? "light"].background,
      }}
    >
      <Text style={{ color: Colors[colorScheme ?? "light"].text}}>
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
