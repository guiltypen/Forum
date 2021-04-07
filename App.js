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

//Global theme
const theme = {
  first: {
    mainColor: "#0c3140",
    secondaryColor: "#075f73",
    textColor: "#fcffff",
  },
};

//Navigator
const { Navigator, Screen } = createStackNavigator();

//Code
export default function App() {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme.first}>
      <NavigationContainer>
        <Navigator initialRouteName="Home">
          <Screen name={t("Home")} component={Home} />
        </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
