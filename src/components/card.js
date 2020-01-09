import React from "react";
import { colors } from "../styles/const";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Subtitle } from "../styles/title";

export const Card = ({ imgUrl, title, style, onPress }) => (
  <TouchableOpacity style={(style, styles.container)} onPress={onPress}>
    <Image
      style={{ width: "100%", height: "70%" }}
      source={imgUrl ? { uri: imgUrl } : require("../../assets/background.jpg")}
    ></Image>
    <Subtitle style={styles.title}>{title}</Subtitle>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    height: 200,
    margin: 10,
    borderWidth: 1,
    borderColor: colors.main,
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10
  },
  title: {
    marginTop: 30
  }
});
