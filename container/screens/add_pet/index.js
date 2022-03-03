import * as React from "react";
import { Text, View, Pressable, TextInput, Dimensions } from "react-native";

import { styles } from "./index.css";
import { useSelector, useDispatch } from "react-redux";

import { add_pet } from "../../../utils/redux/reducers/pets";
import { createPetID } from "../../../utils/middleware";
import { useToast } from "react-native-toast-notifications";

export default function App({ navigation }) {
  const dispatch = useDispatch();
  const [animalType, setChangeAnimalType] = React.useState("");
  const [name, setName] = React.useState("");
  const [dob, seDob] = React.useState("");
  const toast = useToast();

  const checkTextInput = () => {
    if (!animalType.trim()) {
      toast.show("Please your pet type");
      return;
    }
    if (!name.trim()) {
      toast.show("Please Enter pet name");
      return;
    }

    if (!dob.trim()) {
      toast.show("Please Enter pet date of birth");
      return;
    }

    if (
      animalType.toLowerCase() !== "dog" &&
      animalType.toLowerCase() !== "cat" &&
      animalType.toLowerCase() !== "other"
    ) {
      toast.show("Pet type must be dog, Cat or other");
      return;
    }

    if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(dob)) {
      toast.show("Incorrect date format (yyyy-mm-dd)");
      return;
    }

    dispatch(
      add_pet({
        id: petsLength.length + 1,
        companyTitle: null,
        conpanyID: null,
        animalType: animalType,
        cip_Id: createPetID(),
        name: name,
        insurance_status: "No cover",
        dob: dob,
      }),
    );

    toast.show("Pet added");
    navigation.navigate("Home");
  };

  const petsLength = useSelector((state) => state.pets.petsList);

  const width = Dimensions.get("window").width;

  const inputList = [
    {
      id: 0,
      state: name,
      placeHolder: "Name",
      keyboardType: "default",
      input: setName,
    },
    {
      id: 1,
      state: animalType,
      placeHolder: "Animal Type",
      keyboardType: "default",
      input: setChangeAnimalType,
    },
    {
      id: 1,
      state: dob,
      placeHolder: "Dob (dd-mm-yyyy)",
      keyboardType: "number-pad",
      input: seDob,
    },
  ];

  return (
    <View style={styles.container}>
      {inputList.map((i, l) => (
        <TextInput
          key={l}
          style={styles.input}
          onChangeText={i.input}
          placeholder={i.placeHolder}
          value={i.state}
          keyboardType={i.keyboardType}
        />
      ))}

      <View style={{ position: "absolute", bottom: 0, width: width }}>
        <Pressable onPress={checkTextInput} style={styles.add_pet_pressable}>
          <Text style={styles.add_pet_pressable_text}>ADD PET</Text>
        </Pressable>
      </View>
    </View>
  );
}
