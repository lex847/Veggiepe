import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Home } from "./src/views/Home";
import { List } from "./src/views/List";
import { Recipe } from "./src/views/Recipe";

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
      headerShown: false
    }
  },
  List: {
    screen: List,
    navigationOptions: {
      title: "List",
      headerShown: false
    }
  },
  Recipe: {
    screen: Recipe,
    navigationOptions: {
      title: "Recipe",
      headerShown: false
    }
  }
});

const App = createAppContainer(MainNavigator, {
  initialRouteName: "Veggiepe",
  defaultNavigationOptions: {
    headerStyle: {
      opacity: 0
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
});

export default App;
