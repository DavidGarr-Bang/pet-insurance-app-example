import * as React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./index.css";
import { useSelector } from "react-redux";
import { remove_message } from "../../../utils/redux/reducers/messages";
import Item from "../../../components/rederitems/notifications/";

function App(props) {
  const { navigation } = props;
  const PetsList = useSelector((state) => state.messages.messages_list);
  const renderItem = ({ item }) => <Item {...item} onPress={remove_message} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={PetsList}
        extraData={PetsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default App;
