//Uncomment the code below when recieving the functional backend for integration
/*
//Dependencies
import { observer } from "mobx-react";
import React from "react";

//Framework
import { Content, List, Spinner, Text } from "native-base";

//Imports
import roomStore from "../../stores/roomStore";
import RoomItem from "./RoomItem";

//Code
const RoomList = () => {
  if (roomStore.loading) {
    return (
      <>
        <Spinner />
        <Text>Still Loading!</Text>
      </>
    );
  }
  const roomList = roomStore.rooms.map((room) => (
    <RoomItem room={room} key={room.id} />
  ));
  return (
    <Content>
      <List>{roomList}</List>
    </Content>
  );
};

export default observer(RoomList);
*/
