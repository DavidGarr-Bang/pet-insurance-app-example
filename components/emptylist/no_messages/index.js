import * as React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { Text, Button } from "react-native-paper";
import { styles } from "./index.css";

function Item() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All up to date</Text>
      <Text style={styles.paragraph}>
        You seem to have no passwords stored yet.
      </Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#00aced",
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  paragraph: {
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
  },
  title: {
    margin: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    height: 128,
    width: 128,
  },
});
