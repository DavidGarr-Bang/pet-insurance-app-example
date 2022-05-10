import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Pressable } from "react-native";

import { RadioButton, Text, Title, Button, Card } from "react-native-paper";

import { MyContext } from "../context";

export default function App(props) {
  const [
    count,
    setCount,
    name,
    setName,
    animalType,
    setAnimalType,
    age,
    setAge,
    handleSubmit,
    direction,
    setdirection,
  ] = useContext(MyContext);

  const ChangeButtons = () => {
    return (
      <View
        style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}
      >
        <Button
          onPress={() => {
            setdirection("right");
            setTimeout(function () {
              setCount(count - 1);
            }, 100);
          }}
          mode="contained"
          style={{ marginLeft: 10 }}
        >
          Back
        </Button>
        <Button
          onPress={() => {
            setdirection("left");
            setTimeout(function () {
              setCount(count + 1);
            }, 100);
          }}
          mode="contained"
          style={{ marginLeft: 10 }}
        >
          Next
        </Button>
      </View>
    );
  };

  const options = [
    { name: "1", title: "Cat" },
    { name: "2", title: "Dog" },
    { name: "3", title: "Mouse" },
    { name: "4", title: "Other" },
  ];

  return (
    <View style={styles.container}>
      <Title style={styles.paragraph}>What type of animal is the pet?</Title>
      <RadioButton.Group
        style={{ alignSelf: "center" }}
        onValueChange={setAnimalType}
        value={animalType}
      >
        {options.map((i, l) => (
          <TouchableOpacity
            onPress={() => setAnimalType(i.title)}
            style={{
              flexDirection: "row",
              marginLeft: 40,
              marginRight: 40,
              shadowColor: "green",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
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
          </TouchableOpacity>
        ))}
      </RadioButton.Group>
      <ChangeButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  paragraph: {
    marginLeft: 20,
    marginRight: 20,
    fontWeight: "bold",
    textAlign: "center",
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
