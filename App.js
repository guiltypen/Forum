//Dependencies
import React from "react";

//Frameworks
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Imports
import Home from "./conponents/Home";
import Signin from "./conponents/authentication/SignIn";
import Signup from "./conponents/authentication/Signup";
const { Navigator, Screen } = createStackNavigator();

import { AuthImg } from "./style";
import { View } from "native-base";
//Code
export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Signin">
        <Screen name="Home" component={Home} />
        <Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
