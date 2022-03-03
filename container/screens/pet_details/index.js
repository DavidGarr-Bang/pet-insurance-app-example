import * as React from "react";
import { View, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { cancel_pet_in } from "../../../utils/redux/reducers/pets";
import { add_pet_info } from "../../../utils/redux/reducers/pet_in";

import { styles } from "./index.css";

import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import { useToast } from "react-native-toast-notifications";
import { age_cal } from "../../../utils/middleware/index";

export default function App(props) {
  const { route, navigation } = props;
  const PetsList = useSelector((state) => state.pets.petsList);
  const id = route.params.id;
  const Pet = PetsList.find((pet) => pet.id == id);

  const dispatch = useDispatch();
  const toast = useToast();

  const age = React.useMemo(() => age_cal(Pet.dob), age);

  const cancel_in = () => {
    dispatch(cancel_pet_in(id));
    toast.show("Insurance canceled");
  };

  const StorePet = (Pet) => {
    dispatch(add_pet_info(Pet));
    navigation.push("In_companies");
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Paragraph>Name</Paragraph>
          <Title>{Pet.name}</Title>
          <Paragraph>Age</Paragraph>
          <Title>{age}</Title>
        </Card.Content>
      </Card>

      {Pet.insurance_status == "Fully covered" ||
      Pet.insurance_status == "Accident only" ? (
        <Card style={styles.card}>
          <Card.Content>
            <Paragraph>Insurance status</Paragraph>
            <Title>{Pet.insurance_status}</Title>
          </Card.Content>

          <Card.Content>
            <Paragraph>Company</Paragraph>
            <Title>{Pet.companyTitle}</Title>
          </Card.Content>
        </Card>
      ) : null}

      <Pressable
        onPress={() => {
          Pet.insurance_status == "Fully covered" ||
          Pet.insurance_status == "Accident only"
            ? cancel_in()
            : StorePet(Pet);
        }}
      >
        <Card style={styles.card}>
          <Card.Title
            title={
              Pet.insurance_status == "Fully covered" ||
              Pet.insurance_status == "Accident only"
                ? "Cancel insurance"
                : "Add insurance"
            }
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
    </View>
  );
}
