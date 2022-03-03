import * as React from "react";
import { Pressable } from "react-native";
import { styles } from "../../../container/screens/in_details/index.css";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

const Item = ({ cover, onPress }) => (
  <Pressable
    onPress={() => {
      onPress(cover);
    }}
  >
    <Card style={styles.card}>
      <Card.Title
        title={cover}
        right={() => (
          <Avatar.Icon
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
            size={50}
            color={"rgba(0,0,0,0.6)"}
            icon="chevron-right"
          />
        )}
      />
    </Card>
  </Pressable>
);

export default Item;
