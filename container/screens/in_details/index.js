import * as React from "react";
import { View, FlatList, Text } from "react-native";
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

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: Company.companyTitle,
    });
  }, [navigation]);

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
    navigation.navigate("Pet_Details", { id: Pet.id });
  };

  const renderItem = ({ item }) => <Item {...item} onPress={add_In} />;

  return (
    <View style={styles.container}>
      <Card.Content style={{ marginTop: 10 }}>
        <Paragraph>Monthly price</Paragraph>
        <Title>£{Company.monthyPrice}</Title>
      </Card.Content>

      <Card.Title
        title={
          <Text style={{ fontSize: 14, color: "rgba(0,0,0,0.6)" }}>
            Available covers
          </Text>
        }
        style={{ marginBottom: -10 }}
      />

      <FlatList
        data={Company.insurance_options}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
