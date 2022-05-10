import * as React from "react";
import { View, FlatList, SectionList } from "react-native";
import { Text, Card, List } from "react-native-paper";
import { styles } from "./indexcss";

import { useSelector, useDispatch } from "react-redux";

const Holder = [
  {
    title: "User details",
    data: [
      {
        id: "0",
        title: "Name",
        subtitle: "Tiffiany Segal",
      },
      {
        id: "1",
        title: "Address",
        subtitle: "5 Station Road, London SE8 2TF",
      },
      {
        id: "3",
        title: "Email",
        subtitle: "tiffiany@mozilla.co.uk",
      },
    ],
  },
  {
    title: "Payment method",
    data: [
      {
        id: "2",
        title: "Card details",
        subtitle: "**** **** **** 5522",
      },
    ],
  },
];

const Item = ({ title, subtitle }) => (
  <List.Item title={title} description={subtitle} />
);

function App() {
  const renderItem = ({ item }) => <Item {...item} />;
  return (
    <View style={styles.container}>
      <SectionList
        sections={Holder}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Card.Title
            title={
              <Text style={{ fontSize: 14, color: "rgba(0,0,0,0.6)" }}>
                {title}
              </Text>
            }
            style={{ marginBottom: -6 }}
          />
        )}
      />
    </View>
  );
}

export default App;
