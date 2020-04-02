import React from "react";
import { colors, font } from "./const";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

export const Title = ({ children, style }) => {
  let [fontsLoaded] = useFonts({
    "Patrick-Hand": require("../../assets/fonts/PatrickHand-Regular.ttf")
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Text style={(style, styles.title)}>{children}</Text>;
  }
};

export const Subtitle = ({ children, style }) => {
  let [fontsLoaded] = useFonts({
    "Patrick-Hand": require("../../assets/fonts/PatrickHand-Regular.ttf")
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Text style={(style, styles.subtitle)}>{children}</Text>;
  }
};

export const CardTitle = ({ children, style }) => {
  let [fontsLoaded] = useFonts({
    "Patrick-Hand": require("../../assets/fonts/PatrickHand-Regular.ttf")
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Text style={(style, styles.card)}>{children}</Text>;
  }
};

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    fontFamily: "Patrick-Hand",
    color: colors.text,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Patrick-Hand",
    color: colors.text,
    fontWeight: "bold"
  },
  card: {
    fontSize: 20,
    fontFamily: "Patrick-Hand",
    color: colors.tertiary,
    fontWeight: "bold"
  }
});
