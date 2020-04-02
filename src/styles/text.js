import React from "react";
import { colors, font } from "./const";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

export const RegularText = ({ children, style }) => {
  let [fontsLoaded] = useFonts({
    "Karla-Regular": require("../../assets/fonts/Karla-Regular.ttf")
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Text style={(style, styles.regular)}>{children}</Text>;
  }
};

export const BoldText = ({ children, style }) => {
  let [fontsLoaded] = useFonts({
    "Karla-Bold": require("../../assets/fonts/Karla-Bold.ttf")
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Text style={(style, styles.bold)}>{children}</Text>;
  }
};

const styles = StyleSheet.create({
  regular: {
    fontSize: font.size.sm,
    fontFamily: "Karla-Regular",
    color: colors.text,
    fontWeight: "bold"
  },
  bold: {
    fontSize: font.size.sm,
    fontFamily: "Karla-Bold",
    color: colors.text,
    fontWeight: "bold"
  }
});
