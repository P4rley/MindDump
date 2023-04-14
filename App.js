import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.logo}>
          <Text style={{ fontWeight: 500 }}>Mind</Text>Dump
        </Text>
        <Icon name="search" size={30} color="#000" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    display: "flex",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  logo: {
    fontWeight: 800,
    fontSize: 24,
  },
});
