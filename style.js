//Dependancies
import styled from "styled-components/native";

export const BackgroundContainer = styled.ImageBackground`
  flex: 1;

  background-color: ${(props) => props.theme.mainColor};

  height: 100%;
  width: 100%;
`;

export const HomeMiddle = styled.View`
  height: 40%;

  align-items: center;
  justify-content: center;
`;

export const HomeText = styled.Text`
  color: ${(props) => props.theme.textColor};

  font-size: 26px;
  text-align: center;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.textColor};

  font-size: 20px;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  background-color: ${(props) => props.theme.secondaryColor};

  height: 70px;
  width: 200px;

  border-radius: 100px;

  align-self: center;
  align-items: center;
  justify-content: center;
`;
