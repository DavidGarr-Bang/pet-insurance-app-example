import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { MyContext } from "../context";
import { Text, Title, Button } from "react-native-paper";

import Slider from "@react-native-community/slider";

import { withTheme } from "react-native-paper";

function App(props) {
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

  const { width } = Dimensions.get("window");
  const { colors } = props.theme;

  const ChangeButtons = () => {
    return (
      <View
        style={{ flexDirection: "row", alignSelf: "center", marginTop: 20 }}
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

  return (
    <View style={styles.container}>
      <Title style={styles.paragraph}>What is the pets age?</Title>
      <Text style={styles.age}>Age: {age}</Text>

      <Slider
        style={{ width: width / 2, height: 40, alignSelf: "center" }}
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

      <ChangeButtons />
    </View>
  );
}

export default withTheme(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  paragraph: {
    margin: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  age: {
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
