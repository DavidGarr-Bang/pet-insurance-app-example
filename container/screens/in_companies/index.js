import * as React from "react";
import { Text, View, FlatList, Pressable } from "react-native";
import { Card, Avatar } from "react-native-paper";
import { styles } from "./index.css";
import { useSelector } from "react-redux";
import Item from "../../../components/rederitems/in_companies/index";

export default function App(props) {
  const { navigation } = props;
  const insurance_companies = useSelector(
    (state) => state.insurance_companies.insurance_companies_list,
  );
  const Pet = useSelector((state) => state.petInfo.pet_info);
  const renderItem = ({ item }) => <Item {...item} />;

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title={Pet.name} />
      </Card>

      <FlatList
        data={insurance_companies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
