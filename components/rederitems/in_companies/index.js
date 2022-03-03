import * as React from "react";
import { Pressable } from "react-native";
import { Card, Avatar } from "react-native-paper";
import { styles } from "../../../container/screens/in_companies/index.css";
import { useNavigation } from "@react-navigation/native";

const Item = ({ id, companyTitle }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.push("In_details", { id: id })}
      style={styles.item}
    >
      <Card.Title
        title={companyTitle}
        right={() => (
          <Avatar.Icon
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
            size={50}
            color={"rgba(0,0,0,0.6)"}
            icon="chevron-right"
          />
        )}
      />
    </Pressable>
  );
};

export default Item;
