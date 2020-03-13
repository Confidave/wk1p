import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.red}>
      <Text>110719010葉柏辰</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#32a881",
    alignItems: "center",
    justifyContent: "center"
  },
  red: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 100,
    backgroundColor: "#32a881"
  }
});
