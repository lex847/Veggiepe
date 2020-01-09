import React from "react";
import axios from "axios";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Title } from "../styles/title";
import { CustomButton } from "../components/button";
import { colors } from "../styles/const";

export const Home = props => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.titleContainer}>
        <Title>Veggiepe</Title>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Start"
          onPress={() => props.navigation.navigate("List")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center"
  },
  titleContainer: {
    padding: 30,
    backgroundColor: "rgba(242, 212, 146, 0.8)",
    marginBottom: 50
  },
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 70,
    paddingLeft: 70,
    backgroundColor: colors.tertiary
  }
});
