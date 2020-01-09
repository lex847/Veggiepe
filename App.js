import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Home } from "./src/views/Home";
import { List } from "./src/views/List";

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  List: { screen: List }
});

const App = createAppContainer(MainNavigator, {
  initialRouteName: "Veggiepe",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
});

export default App;
