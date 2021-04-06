//Uncomment the code below when recieving the functional backend for integration
/** 

//Dependencies
import { observer } from "mobx-react";
import React from "react";

//Framework
import { Content, List, Spinner, Text } from "native-base";

//Imports
import messageStore from "../../stores/messageStore";
import MessageItem from "./MessageItem";

//Code
const MessageList = () => {
  if (messageStore.loading) {
    return (
      <>
        <Spinner />
        <Text>Still Loading!</Text>
      </>
    );
  }
  const messageList = messageStore.messages.map((message) => (
    <MessageItem message={message} key={message.id} />
  ));
  return (
    <Content>
      <List>{MessageList}</List>
    </Content>
  );
};

export default observer(MessageList);

*/
