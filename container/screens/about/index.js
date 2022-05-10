import * as React from "react";
import { View, Image } from "react-native";
import { Text, Title, Card } from "react-native-paper";

import { expo } from "../../../app.json";
import { styles } from "./index.css";
import OpenURLText from "../../../components/Open_URL_text";

export default function App() {
  return (
    <View style={styles.container}>
      <Title style={[styles.paragraph, { marginTop: 30 }]}>{expo.name}</Title>

      <Text style={styles.paragraph}>Version:{expo.version}</Text>

      <Text style={styles.paragraph}>Author: David Garrick - Bangbola</Text>

      <OpenURLText
        style={styles.paragraph}
        url={"https://www.linkedin.com/in/david-garrick-bangbola-28b749148/"}
      >
        Linked In
      </OpenURLText>
    </View>
  );
}
