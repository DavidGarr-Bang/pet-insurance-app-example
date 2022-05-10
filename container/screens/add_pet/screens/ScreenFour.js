import React, { useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MyContext } from "../context";

import { Text, Button, Title } from "react-native-paper";

export default function App() {
  const [
    count,
    setCount,
    name,
    setName,
    animalType,
    setAnimalType,
    age,
    setage,
    handleSubmit,
    direction,
    setdirection,
  ] = useContext(MyContext);

  const ChangeButtons = () => {
    return (
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
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
          onPress={handleSubmit}
          mode="contained"
          style={{ marginLeft: 10 }}
        >
          Finsh
        </Button>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Title style={styles.paragraph}>Create pet</Title>
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
    margin: 24,
    marginTop: 0,
    fontSize: 14,
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
