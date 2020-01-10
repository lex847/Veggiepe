import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { colors } from "../styles/const";
import { Card } from "../components/card";

export const List = props => {
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
      <ScrollView>
        {recipes.length > 0 &&
          recipes.map(recipe => (
            <Card
              onPress={() =>
                props.navigation.navigate("Recipe", { recipe: recipe.recipe })
              }
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              imgUrl={recipe.recipe.image}
              tags={recipe.recipe.digest}
            />
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start"
  }
});
