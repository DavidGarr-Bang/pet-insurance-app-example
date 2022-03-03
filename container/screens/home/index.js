import * as React from "react";
import { Text, View, FlatList, Pressable } from "react-native";
import { styles } from "./index.css";
import { useSelector } from "react-redux";
import Item from "../../../components/rederitems/homeRenderItem";

export default function App(props) {
  const { navigation } = props;
  const petsList = useSelector((state) => state.pets.petsList);
  const renderItem = ({ item }) => <Item {...item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={petsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Pressable
        onPress={() => navigation.push("Add_Pet")}
        style={styles.add_pet_pressable}
      >
        <Text style={styles.add_pet_pressable_text}>ADD PET</Text>
      </Pressable>
    </View>
  );
}
