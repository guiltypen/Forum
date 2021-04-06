//Uncomment the code below when recieving the functional backend for integration
/** 

//Dependencies
import { makeAutoObservable } from "mobx";

//Imports
import instance from "./instance";

//Code
class UserStore {
  users = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  fetchUsers = async () => {
    try {
      const response = await instance.get("/users");
      this.users = response.data;
      this.loading = false;
    } catch (error) {
      console.error("UserStore -> fetchUsers -> Error", error);
    }
  };
}

const userStore = new UserStore();
userStore.fetchUsers();

export default userStore;


*/
