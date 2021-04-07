//Dependencies
import React, { useState } from "react";

//authStore
import authStore from "../../stores/authStore";

//Style
import {
  AuthContainer,
  AuthTitle,
  AuthButton,
  AuthButtonText,
  AuthTextInput,
  AuthOther,
  AuthImg,
} from "../../style";

//Code
const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    console.log("Signin", user);
    authStore.signin(user);
    if (authStore.user) navigation.replace("Home");
  };

  return (
    <AuthContainer>
      <AuthImg source={require("../../assets/logo.png")} />
      <AuthTitle>Signin</AuthTitle>
      <AuthTextInput
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        Click here to register!
      </AuthOther>
    </AuthContainer>
  );
};

export default Signin;
