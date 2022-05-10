import * as React from "react";
import { View, FlatList, SectionList } from "react-native";
import { styles } from "./index.css";
import { Text, List } from "react-native-paper";

const DATA = [
  {
    id: "0",
    title: "Message Center",
    place: "message_center",
  },
  {
    id: "1",
    title: "Payment Details",
    place: "personal_details",
  },
  {
    id: "2",
    title: "About",
    place: "about",
  },
];

const Item = ({ title, navigation, place }) => {
  return (
    <List.Item
      onPress={() => navigation.push(place)}
      title={title}
      right={(props) => <List.Icon {...props} icon="chevron-right" />}
    />
  );
};

const App = (props) => {
  const renderItem = ({ item }) => <Item {...item} {...props} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default App;
