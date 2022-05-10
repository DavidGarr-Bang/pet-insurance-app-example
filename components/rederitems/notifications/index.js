import * as React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Text, List, Title } from "react-native-paper";
import { useDispatch } from "react-redux";

const Item = ({ id, title, subtitle, date, onPress }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <List.Icon icon={"information"} color={"#4373e2"} />

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{subtitle}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Pressable onPress={() => dispatch(onPress(id))}>
        <List.Icon icon={"close"} color={"rgba(0, 0, 0, .7 )"} />
      </Pressable>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
  },
  description: { color: "rgba(0,0,0,0.6)", marginTop: 6 },
  date: { color: "rgba(0,0,0,0.6)", marginTop: 10, fontWeight: "bold" },
});
