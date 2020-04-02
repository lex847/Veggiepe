import React from "react";
import { colors } from "../styles/const";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { Subtitle, CardTitle } from "../styles/title";
import { Tag } from "./tag";

export const Card = ({ imgUrl, title, style, onPress, tags }) => (
  <TouchableOpacity style={(style, styles.container)} onPress={onPress}>
    <View style={styles.image}>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={
          imgUrl ? { uri: imgUrl } : require("../../assets/images/sun.png")
        }
      ></Image>
    </View>
    <View style={styles.rightContainer}>
      <CardTitle style={{ color: colors.secondary }}>{title}</CardTitle>
      <View style={styles.tagsContainer}>
        {tags.map((tag, idx) => (
          <Tag tag={tag} key={idx} />
        ))}
      </View>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    height: 150,
    margin: 10,
    backgroundColor: colors.text,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderRadius: 10
  },
  rightContainer: {
    width: "50%",
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    maxWidth: "100%"
  },
  image: {
    width: "40%"
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10
  }
});
