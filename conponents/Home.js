//Dependencies
import React from "react";

import authStore from "../stores/authStore";
//Style
import {
  BackgroundContainer,
  ButtonContainer,
  HomeMiddle,
  HomeText,
} from "../style";

//Code
const Home = () => {
  const handleSubmit = () => {
    console.log("Signout", user);
    authStore.signout;
  };

  return (
    <BackgroundContainer>
      <HomeMiddle>
        <HomeText>Testing!</HomeText>
      </HomeMiddle>
      <ButtonContainer onClick={handleSubmit}></ButtonContainer>
    </BackgroundContainer>
  );
};

export default Home;
