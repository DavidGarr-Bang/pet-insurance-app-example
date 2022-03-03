import * as React from "react";
import { Text, View, FlatList, Pressable } from "react-native";
import { styles } from "../../../container/screens/home/index.css";
import { useNavigation } from "@react-navigation/native";

const Item = ({ id, name, animalType, insurance_status }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.push("Pet_Details", { id: id })}
      style={styles.item}
    >
      <View style={{ borderBottomWidth: 1, paddingBottom: 4 }}>
        <Text style={styles.name}>{animalType}</Text>
      </View>
      <Text style={styles.name}>Pet name: {name}</Text>
      <Text style={styles.name}>Insured: {insurance_status}</Text>
    </Pressable>
  );
};

export default Item;
