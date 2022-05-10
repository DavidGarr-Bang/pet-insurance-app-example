import React, { useContext } from "react";

import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";
import ScreenThree from "./screens/ScreenThree";
import ScreenFour from "./screens/ScreenFour";

import { WithPushTransition } from "react-native-simple-transition";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { MyContext } from "./context";

function App() {
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
    <WithPushTransition
      style={styles.innerWindow}
      duration={500}
      direction={direction}
    >
      <View key={count} style={[styles.innerContainer]}>
        {count == 0 ? (
          <ScreenOne />
        ) : count == 1 ? (
          <ScreenTwo />
        ) : count == 2 ? (
          <ScreenThree />
        ) : count == 3 ? (
          <ScreenFour />
        ) : null}
      </View>
    </WithPushTransition>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },

  innerWindow: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  innerContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
