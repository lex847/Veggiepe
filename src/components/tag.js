import React from "react";
import { colors } from "../styles/const";
import { StyleSheet, Text, View } from "react-native";
import { Subtitle } from "../styles/title";

const tagsMap = [
  {
    name: "PROCNT",
    label: "Protein",
    min: 10,
    color: colors.orange
  },
  {
    name: "FE",
    label: "Iron",
    min: 2,
    color: colors.tertiary
  }
];

export const Tag = ({ tag }) => (
  <View>
    {tagsMap.map(
      tagItem =>
        tagItem.name === tag.tag &&
        tagItem.min <= tag.total && (
          <View
            style={(styles.tag, { backgroundColor: tagItem.color })}
            key={tagItem.name}
          >
            <Text>{tag.label}</Text>
          </View>
        )
    )}
  </View>
);
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 20,
    padding: 20
  },
  tag: {
    width: 30,
    height: 20,
    color: "white",
    padding: 10
  }
});
