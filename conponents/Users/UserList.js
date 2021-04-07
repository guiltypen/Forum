//Uncomment the code below when recieving the functional backend for integration
/*

//Dependencies
import { observer } from "mobx-react";
import React from "react";
import { useState } from "react";
import { TextInput, View } from "react-native";


//Framework
import { Content, List, Spinner, Text } from "native-base";

//Imports
import userStore from "../../stores/userStore";
import UserItem from "./UserItem";

//Code
const UserList = () => {
  const [query, setQuery] = useState("");
  if (userStore.loading) {
    return (
      <>
        <Spinner />
        <Text>Still Loading!</Text>
      </>
    );
  }
  const userList = userStore.users.filter(
    (user) =>
      user.userName.toLowerCase().includes(query.toLowerCase()) ||
      user.firstName.toLowerCase().includes(query.toLowerCase()) ||
      user.lastName.toLowerCase().includes(query.toLowerCase())
  ).map((user) => (
    <UserItem user={user} key={user.id} />
  ));
  return (
    <Content>
       <View>
      <TextInput
        placeholder="Search here..."
        onChangeText={(text) => setQuery(text)}
        defaultValue={query}
      />
    </View>
      <List>{userList}</List>
    </Content>
  );
};

export default observer(UserList);

*/
