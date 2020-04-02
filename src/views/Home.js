import React from "react";
import axios from "axios";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Title, Subtitle } from "../styles/title";
import { CustomButton } from "../components/button";
import { colors, font } from "../styles/const";

export const Home = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.navigation.navigate("List")}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/apple.png")}
          style={styles.logo}
        />
      </View>
      <Title>Veggiepe</Title>
      <Subtitle>Welcome!</Subtitle>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background
  },
  logoContainer: {
    marginBottom: 50
  },
  logo: {
    width: 80,
    height: 80
  },
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 70,
    paddingLeft: 70,
    backgroundColor: colors.tertiary
  }
});
