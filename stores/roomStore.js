//Uncomment the code below when recieving the functional backend for integration
/*
//Dependencies
import { makeAutoObservable } from "mobx";

//Imports
import instance from "./instance";

//Code
class RoomStore {
  rooms = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  fetchRooms = async () => {
    try {
      const response = await instance.get("/rooms");
      this.rooms = response.data;
      this.loading = false;
    } catch (error) {
      console.error("RoomStore -> fetchRooms -> Error", error);
    }
  };
}

const roomStore = new RoomStore();
roomStore.fetchRooms();

export default roomStore;

*/
