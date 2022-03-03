import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },

  title: {
    margin: 10,
  },

  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    textAlign: "left",
    flex: 1,
  },
  type: { textAlign: "right", flex: 1 },

  add_pet_pressable: {
    backgroundColor: "rgb(67,115,226)",
    padding: 10,
  },
  add_pet_pressable_text: { textAlign: "center", color: "white" },
});
