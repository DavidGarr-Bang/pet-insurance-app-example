import * as React from "react";
import { Pressable } from "react-native";
import { styles } from "../../../container/screens/in_details/index.css";
import { Avatar, Card, Title, Paragraph, Text } from "react-native-paper";

const Item = ({ title, subtitle, Pet, onPress, disabled }) => {
  const RightArrow = (props) => (
    <Avatar.Icon
      {...props}
      style={{ backgroundColor: "rgba(0,0,0,0)" }}
      size={50}
      color={"rgba(0,0,0,0.6)"}
      icon="chevron-right"
    />
  );

  const LeftContent = (props) => (
    <Avatar.Icon
      {...props}
      style={{ alignSelf: "center" }}
      icon={
        Pet.animalType == "Cat"
          ? "cat"
          : Pet.animalType == "Dog"
          ? "dog"
          : "paw"
      }
    />
  );
  return (
    <Pressable
      onPress={() => {
        onPress(Pet);
      }}
    >
      <Card style={{ marginTop: 0, borderRadius: 0 }} elevation={0}>
        <Card.Title
          title={
            <Text
              style={{
                fontSize: 16,
                color: title === "Remove pet" ? "red" : "black",
              }}
            >
              {title}
            </Text>
          }
          subtitle={subtitle}
          right={
            subtitle === "None" || subtitle === "No cover" ? null : RightArrow
          }
        />
      </Card>
    </Pressable>
  );
};

export default Item;
