import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = ({ titulo }) => (
  <View style={styles.header}>
    <Text style={styles.texto}>{titulo}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0D47A1",
    padding: 15,
    width: "100%",
  },
  texto: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    color: "#fff"
  },
});

export default Header;
