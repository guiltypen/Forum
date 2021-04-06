//Dependencies
import React from "react";

//Frameworks
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Imports
import Home from "./conponents/Home";

const { Navigator, Screen } = createStackNavigator();

//Code
export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}
