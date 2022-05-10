import React, { createContext, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ProgressBar } from "react-native-paper";

import { add_pet } from "../../../utils/redux/reducers/pets";
import { createPetID } from "../../../utils/middleware/index";
import { useSelector, useDispatch } from "react-redux";

export const MyContext = React.createContext();

export const ContextProvider = (props) => {
  const { children, navigation } = props;
  const petsLength = useSelector((state) => state.pets.petsList);

  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  const [age, setAge] = useState(10);
  const [animalType, setAnimalType] = useState("Cat");
  const [direction, setdirection] = useState("left");

  const handleSubmit = () => {
    dispatch(
      add_pet({
        id: petsLength.length + 1,
        companyTitle: null,
        conpanyID: null,
        animalType: animalType,
        cip_Id: createPetID(),
        name: name,
        insurance_status: "No cover",
        age: age,
        calims: 0,
        claim_status: "none",
      }),
    );

    navigation.navigate("Home");
  };

  const inputTypes = [
    // current screen
    count,
    setCount,
    //  name state and update
    name,
    setName,
    // animal type state and update
    animalType,
    setAnimalType,
    // age state and update
    age,
    setAge,
    //
    handleSubmit,
    //
    direction,
    setdirection,
  ];

  return (
    <MyContext.Provider value={inputTypes}>
      <ProgressBar progress={count / 3} color={"#f1c40f"} />
      <View style={styles.appContainer}>{children}</View>
    </MyContext.Provider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    backgroundColor: "#00800d",
    paddingVertical: 10,
    paddingHorizontal: 50,
    justifyContent: "center",
  },
  buttonLabel: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default ContextProvider;
