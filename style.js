//Dependancies
import styled from "styled-components/native";

export const BackgroundContainer = styled.ImageBackground`
  flex: 1;
  height: 100%;
  width: 100%;
`;

export const HomeMiddle = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const HomeText = styled.Text`
  color: black;
  font-size: 26px;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  background-color: red;

  height: 100px;
  width: 200px;

  border-radius: 100px;

  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #0c3140;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: #fcffff;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: #075f73;
  border-bottom-color: #075f73;
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  padding: 20px;
  background-color: #075f73;
  margin-top: 30px;
  border-radius: 20px;
  width: 150px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;
export const AuthOther = styled.Text`
  color: #075f73;
  margin-top: 15px;
`;

export const AuthImg = styled.Image`
  width: 120px;
  height: 85px;
  margin: 100px;
`;
