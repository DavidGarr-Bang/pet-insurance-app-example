import * as React from "react";
import { View, Dimensions, Pressable } from "react-native";
import {
  Text,
  Title,
  Caption,
  TextInput,
  Appbar,
  RadioButton,
} from "react-native-paper";
import { withTheme } from "react-native-paper";
import { styles } from "./index.css";

import { useToast } from "react-native-toast-notifications";
import Slider from "@react-native-community/slider";

import { useSelector, useDispatch } from "react-redux";
import { update_pet } from "../../../utils/redux/reducers/pets";

function App(props) {
  const { route, navigation } = props;
  const { colors } = props.theme;
  const toast = useToast();

  const { width, height } = Dimensions.get("window");

  const id = route.params.id;
  const PetsList = useSelector((state) => state.pets.petsList);
  const Pet = PetsList.find((pet) => pet.id == id);

  const [name, setName] = React.useState(Pet.name);
  const [age, setAge] = React.useState(Pet.age);
  const [animalType, setAnimalType] = React.useState(Pet.animalType);

  const options = [
    { name: "1", title: "Cat" },
    { name: "2", title: "Dog" },
    { name: "3", title: "Mouse" },
    { name: "4", title: "Other" },
  ];

  React.useEffect(() => {
    // console.log(Pet);
  }, [name, age]);

  const dispatch = useDispatch();

  navigation.setOptions({
    headerRight: () => <Appbar.Action icon="check" onPress={Save} />,
  });

  function Save() {
    if (!name.trim() && route.params.area === "name") {
      toast.show("Please enter pet name");
      return;
    }

    dispatch(
      update_pet({
        ...Pet,
        name: name,
        age: age,
        animalType: animalType,
      }),
    );

    toast.show("Pet details updated!");
    navigation.navigate("Pet_Details", { id: Pet.id });
  }

  return (
    <View style={styles.container}>
      {route.params.area === "name" ? (
        <>
          <Title style={styles.title}>What is your your new pet name?</Title>
          <TextInput
            label="Pet Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <Caption style={styles.warning}>
            Note this may clause your insurance to be cancelled.
          </Caption>
        </>
      ) : route.params.area === "age" ? (
        <>
          <Title style={styles.title}>What is your your new age.</Title>
          <Title style={styles.age}>Age:{age}</Title>
          <Slider
            style={{ width: width, height: 40 }}
            step={1}
            thumbTintColor={colors.primary}
            maximumTrackTintColor={colors.primary}
            minimumTrackTintColor={colors.primary}
            minimumValue={1}
            maximumValue={50}
            onValueChange={setAge}
            value={age}
            onSlidingComplete={setAge}
          />
          <Caption style={styles.warning}>
            Note this may affect your current claim.
          </Caption>
        </>
      ) : route.params.area === "animalType" ? (
        <View>
          <Title style={styles.title}>What is your your new pet type?</Title>
          <RadioButton.Group
            style={{ alignSelf: "center" }}
            onValueChange={setAnimalType}
            value={animalType}
          >
            {options.map((i, l) => (
              <Pressable
                onPress={() => setAnimalType(i.title)}
                style={{
                  flexDirection: "row",
                  marginLeft: 20,
                  marginRight: 20,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 2,
                  borderRadius: 3,
                  backgroundColor: "white",
                  padding: 10,
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  <Text>{i.title}</Text>
                </View>
                <RadioButton value={i.title} />
              </Pressable>
            ))}
          </RadioButton.Group>
          <Caption style={styles.warning}>
            Note this may clause your insurance to be cancelled.
          </Caption>
        </View>
      ) : null}
    </View>
  );
}

export default withTheme(App);
