import React from "react";
import { colors } from "./const";
import { StyleSheet, Text, View } from "react-native";

export const Title = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);
const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: colors.tertiary,
    fontWeight: "bold"
  }
});
