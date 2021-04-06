//Uncomment the code below when recieving the functional backend for integration
/** 

//Dependencies
import { makeAutoObservable } from "mobx";

//Imports
import instance from "./instance";

//Code
class MessageStore {
  messages = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  fetchMessages = async () => {
    try {
      const response = await instance.get("/messages");
      this.messages = response.data;
      this.loading = false;
    } catch (error) {
      console.error("MessageStore -> fetchMessages -> Error", error);
    }
  };
}

const messageStore = new MessageStore();
messageStore.fetchMessages();

export default messageStore;


*/
