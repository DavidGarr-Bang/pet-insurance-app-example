import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MyContext } from "../context";
import { Text, TextInput, Title, Button } from "react-native-paper";

export default function AssetExample() {
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

  return (
    <View style={styles.container}>
      <Title style={styles.paragraph}>What is the pets name?</Title>

      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Button
          disabled={!name.trim()}
          onPress={() => {
            setdirection("left");
            setTimeout(function () {
              setCount(count + 1);
            }, 100);
          }}
          mode="contained"
        >
          Next
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
  },
  paragraph: {
    marginLeft: 20,
    marginRight: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    backgroundColor: "rgba(0,0,0,0)",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
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
