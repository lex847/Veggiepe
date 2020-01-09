import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/const";

export const List = () => {
  useEffect(() => {
    axios
      .get(
        "https://api.edamam.com/search?q=veggie&app_id=b2f9e1bf&app_key=0005a9180f1c835e0aa38e593268299d&from=0&to=10&health=vegetarian"
      )
      .then(response => {
        setRecipes(response.data.hits);
      });
  }, []);

  const [recipes, setRecipes] = useState([]);
  return (
    <View style={styles.container}>
      {recipes.length > 0 &&
        recipes.map(recipe => (
          <Text key={recipe.recipe.label}>{recipe.recipe.label}</Text>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.main,
    backgroundColor: colors.background,
    alignItems: "center"
  }
});
