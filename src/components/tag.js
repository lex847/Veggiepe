import React from "react";
import { colors } from "../styles/const";
import { StyleSheet, Text, View } from "react-native";
import { Subtitle } from "../styles/title";
import { BoldText } from "../styles/text";

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
    color: "#A4DB91"
  },
  {
    name: "VITB12",
    label: "Vitamin B12",
    min: 5,
    color: colors.secondary
  },
  {
    name: "TOCPHA",
    label: "Vitamin E",
    min: 5,
    color: colors.orange
  }
];

export const Tag = ({ tag }) => (
  <View style={styles.container}>
    {tagsMap.map(
      (tagItem, index) =>
        tagItem.name === tag.tag &&
        tagItem.min <= ~tag.daily / ~tag.total && (
          <View
            style={{
              backgroundColor: tagItem.color,
              borderRadius: 10,
              padding: 5,
              marginRight: 5
            }}
            key={index}
          >
            <BoldText style={styles.text}>{tag.label}</BoldText>
          </View>
        )
    )}
  </View>
);
const styles = StyleSheet.create({
  container: {
    marginTop: 5
  },
  text: {
    color: colors.text,
    textAlign: "center"
  }
});
