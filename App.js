//Dependencies
import React from "react";
import { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";
import "./i18n";

//Frameworks
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Imports
import Home from "./conponents/Home";
import { AuthImg } from "./style";
import { View } from "native-base";

//Navigator
import Signin from "./conponents/authentication/SignIn";
import Signup from "./conponents/authentication/Signup";
const { Navigator, Screen } = createStackNavigator();

//Global theme
const theme = {
  first: {
    mainColor: "#0c3140",
    secondaryColor: "#075f73",
    textColor: "#fcffff",
  },
};

//Code
export default function App() {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme.first}>
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
    </ThemeProvider>
  );
}
