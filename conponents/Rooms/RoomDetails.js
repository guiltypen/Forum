//Uncomment the code below when recieving the functional backend for integration
/** 

//Dependencies
import { observer } from "mobx-react";
import React from "react";

//Framework
import { Spinner, Text } from "native-base";

//Imports
import roomStore from "../../stores/roomStore";
import messageStore from "../../stores/messageStore";


//Code
const RoomDetails = () => {
  if (roomStore.loading) {
    return (
      <>
        <Spinner />
        <Text>Still Loading!</Text>
      </>
    );
  }
  return;
  //code for return here (message room screen ---> message list for room)
};

export default observer(RoomDetails);

*/
