import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { colors } from "../styles/const";
import { Card } from "../components/card";
import { ListComponent } from "../components/customList";

export const Recipe = props => {
  useEffect(() => {
    setRecipe(props.navigation.getParam("recipe", "NO-ID"));
  }, []);

  const [recipe, setRecipe] = useState({});
  return (
    <ScrollView>
      <View style={styles.container}>
        {<ListComponent title="Ingredients" data={recipe.ingredientLines} />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  list: {
    flexDirection: "column"
  }
});
