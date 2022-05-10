import * as React from "react";
import { Pressable } from "react-native";
import { Card, Avatar, Text } from "react-native-paper";
import { styles } from "../../../container/screens/in_companies/index.css";
import { useNavigation } from "@react-navigation/native";

const Item = ({ id, companyTitle }) => {
  const navigation = useNavigation();

  const RightArrow = (props) => (
    <Avatar.Icon
      {...props}
      style={{ backgroundColor: "rgba(0,0,0,0)" }}
      size={50}
      color={"rgba(0,0,0,0.6)"}
      icon="chevron-right"
    />
  );

  return (
    <Pressable onPress={() => navigation.push("In_details", { id: id })}>
      <Card style={{ marginTop: 1 }}>
        <Card.Title
          title={<Text style={{ fontSize: 16 }}>{companyTitle}</Text>}
          right={RightArrow}
        />
      </Card>
    </Pressable>
  );
};

export default Item;
