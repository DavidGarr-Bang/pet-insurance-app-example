import * as React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from "./index.css";

function Item() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NO PASSWORDS</Text>
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
