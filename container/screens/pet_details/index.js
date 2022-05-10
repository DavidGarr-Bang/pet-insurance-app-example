import * as React from "react";
import { View, Pressable, SectionList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {
  Avatar,
  Card,
  Title,
  Text,
  Paragraph,
  Button,
  Divider,
  Caption,
  Headline,
} from "react-native-paper";

import moment from "moment";

import {
  cancel_pet_in,
  remove_pet,
  pet_in_claim,
} from "../../../utils/redux/reducers/pets";

import { add_message } from "../../../utils/redux/reducers/messages";
import { add_pet_info } from "../../../utils/redux/reducers/pet_in";
import { styles } from "./index.css";

import { useToast } from "react-native-toast-notifications";
import { age_cal } from "../../../utils/middleware/index";

import Item from "../../../components/rederitems/pet_details_renderitem";

export default function App(props) {
  const { route, navigation } = props;
  const PetsList = useSelector((state) => state.pets.petsList);
  const id = route.params.id;
  const Pet = PetsList.find((pet) => pet.id == id);

  const dispatch = useDispatch();
  const toast = useToast();

  const age = Pet.age;
  const insured =
    Pet.insurance_status == "Fully covered" ||
    Pet.insurance_status == "Accident only"
      ? true
      : false;

  const cancel_in = () => {
    dispatch(cancel_pet_in(id));
    toast.show("Insurance canceled");
  };

  const remove_in = () => {
    dispatch(remove_pet(id));
    navigation.navigate("Home");
    toast.show("Pet removed");
  };

  const make_claim = () => {
    if (Pet.claim_status !== "In progress") {
      dispatch(pet_in_claim(id));
      dispatch(
        add_message({
          id: 3,
          title: "Claim in progress",
          subtitle:
            Pet.companyTitle +
            " will be in touch with soon following your claim.",
          date: moment().format("L"),
        }),
      );
      toast.show("Pet claim has been made");
    } else {
      toast.show("Claim is already in progress");
    }
  };

  const StorePet = (Pet) => {
    dispatch(add_pet_info(Pet));
    navigation.push("In_companies");
  };

  const test = insured
    ? [
        {
          title: "Make Claim",
          onPress: () => make_claim(Pet),
        },
        {
          title: "Cancel insurance",
          onPress: cancel_in,
        },
      ]
    : [
        {
          title: "Add insurance",
          onPress: () => StorePet(Pet),
        },
        { title: "Remove pet", onPress: () => remove_in(Pet) },
      ];

  const list = [
    {
      title: "Details",
      data: [
        {
          title: "Pet name",
          subtitle: Pet.name,
          type: "title",
          onPress: () =>
            navigation.push("edit_pet_details", { id: Pet.id, area: "name" }),
        },
        {
          title: "Age",
          subtitle: age,
          onPress: () =>
            navigation.push("edit_pet_details", { id: Pet.id, area: "age" }),
        },
        {
          title: "Animal type",
          subtitle: Pet.animalType,
          onPress: () =>
            navigation.push("edit_pet_details", {
              id: Pet.id,
              area: "animalType",
            }),
        },
      ],
    },
    {
      title: "Insurance Details",
      data: [
        {
          title: "Insurance status",
          subtitle: Pet.insurance_status,
          onPress:
            Pet.companyTitle === null
              ? () => {}
              : () => navigation.push("Using_in_details", Pet.conpanyID),
        },
        {
          title: "Company",
          subtitle: Pet.companyTitle === null ? "None" : Pet.companyTitle,
          onPress:
            Pet.companyTitle === null
              ? () => {}
              : () => navigation.push("Using_in_details", Pet.conpanyID),
        },
      ],
    },
    {
      title: "Processes",
      data: test,
    },
  ];

  const renderItem = ({ item }) => <Item {...item} />;

  return (
    <View style={styles.container}>
      <SectionList
        sections={list}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) =>
          title === "" ? (
            <View />
          ) : (
            <Card.Title
              title={
                <Text style={{ fontSize: 14, color: "rgba(0,0,0,0.6)" }}>
                  {title}
                </Text>
              }
              style={{ marginBottom: -6 }}
            />
          )
        }
      />
    </View>
  );
}
