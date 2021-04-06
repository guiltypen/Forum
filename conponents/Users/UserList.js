//Uncomment the code below when recieving the functional backend for integration
/** 

//Dependencies
import { observer } from "mobx-react";
import React from "react";

//Framework
import { Content, List, Spinner, Text } from "native-base";

//Imports
import userStore from "../../stores/userStore";
import UserItem from "./UserItem";

//Code
const UserList = () => {
  if (userStore.loading) {
    return (
      <>
        <Spinner />
        <Text>Still Loading!</Text>
      </>
    );
  }
  const userList = userStore.users.map((user) => (
    <UserItem user={user} key={user.id} />
  ));
  return (
    <Content>
      <List>{UserList}</List>
    </Content>
  );
};

export default observer(UserList);

*/
