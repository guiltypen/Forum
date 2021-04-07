//Dependencies
import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";

//Style
import {
  BackgroundContainer,
  ButtonContainer,
  ButtonText,
  HomeMiddle,
  HomeText,
} from "../style";

//Code
const Home = () => {
  const { t, i18n } = useTranslation();
  const languageSwitch = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };

  return (
    <BackgroundContainer>
      <HomeMiddle>
        <HomeText>{t("Hello World!")}</HomeText>
      </HomeMiddle>
      <TouchableOpacity onPress={languageSwitch}>
        <ButtonContainer>
          <ButtonText>{t("Change Language")}</ButtonText>
        </ButtonContainer>
      </TouchableOpacity>
    </BackgroundContainer>
  );
};

export default Home;
