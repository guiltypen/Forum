import { observer } from "mobx-react";
import { useState } from "react";
import { TextInput, View } from "react-native";
import userStore from "../../stores/userStore";

const SearchUser = () => {
  const [query, setQuery] = useState("");
  const userList = userStore.users.filter((user) =>
    users.userName.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <View>
      <TextInput
        placeholder="Search here..."
        onChangeText={(text) => setQuery(text)}
        defaultValue={query}
      />
    </View>
  );
};

export default observer(SearchUser);
