import * as React from "react";
import { Text, View, FlatList, Pressable } from "react-native";
import { styles } from "../../../container/screens/home/index.css";
import { useNavigation } from "@react-navigation/native";

import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const Item = ({ id, name, animalType, insurance_status }) => {
  const navigation = useNavigation();

  const LeftContent = (props) => (
    <Avatar.Icon
      {...props}
      icon={animalType == "Cat" ? "cat" : animalType == "Dog" ? "dog" : "paw"}
    />
  );

  return (
    <>
      <Pressable onPress={() => navigation.push("Pet_Details", { id: id })}>
        <Card>
          <Card.Title
            title={name}
            subtitle={"Insured: " + insurance_status}
            left={LeftContent}
          />
        </Card>
      </Pressable>
    </>
  );
};

export default Item;
