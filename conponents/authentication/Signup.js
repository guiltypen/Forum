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
const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    console.log("Signup", user);
    authStore.signup(user);
    authStore.signin(user);
    if (authStore.user) navigation.replace("Home");
  };

  return (
    <AuthContainer>
      <AuthImg source={require("../../assets/logo.png")} />
      <AuthTitle>Signup</AuthTitle>
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
      <AuthTextInput
        placeholder="Email"
        placeholderTextColor="#A6AEC1"
        onChangeText={(email) => setUser({ ...user, email })}
      />
      <AuthTextInput
        placeholder="First Name"
        placeholderTextColor="#A6AEC1"
        onChangeText={(firstName) => setUser({ ...user, firstName })}
      />
      <AuthTextInput
        placeholder="Last Name"
        placeholderTextColor="#A6AEC1"
        onChangeText={(lastName) => setUser({ ...user, lastName })}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Signup</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signin")}>
        Click here to login!
      </AuthOther>
    </AuthContainer>
  );
};

export default Signup;
