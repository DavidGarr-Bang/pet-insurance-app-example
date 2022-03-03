import * as React from "react";
import { View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { add_pet_in } from "../../../utils/redux/reducers/pets";
import { styles } from "./index.css";
import { Card, Title, Paragraph } from "react-native-paper";
import { useToast } from "react-native-toast-notifications";

import Item from "../../../components/rederitems/in_details_RenderItem/index";

export default function App(props) {
  const { route, navigation } = props;
  const insurance_companies = useSelector(
    (state) => state.insurance_companies.insurance_companies_list,
  );

  const id = route.params.id;
  const Company = insurance_companies.find((pet) => pet.id == id);

  const Pet = useSelector((state) => state.petInfo.pet_info);

  const dispatch = useDispatch();
  const toast = useToast();

  const add_In = (cover) => {
    dispatch(
      add_pet_in({
        ...Pet,
        companyTitle: Company.companyTitle,
        conpanyID: Company.conpanyID,
        cover: cover,
      }),
    );
    toast.show("Insurance added to pet");
    navigation.navigate("Home");
  };

  const insurance_options = [
    { id: 0, cover: "Fully covered" },
    { id: 1, cover: "Accident only" },
  ];

  const renderItem = ({ item }) => <Item {...item} onPress={add_In} />;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Paragraph>Name</Paragraph>
          <Title>{Company.companyTitle}</Title>
          <Paragraph>Monthly price</Paragraph>
          <Title>£{Company.monthyPrice}</Title>
        </Card.Content>
      </Card>

      <FlatList
        data={insurance_options}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
