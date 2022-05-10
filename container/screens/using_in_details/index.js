import * as React from "react";
import { View } from "react-native";
import { Text, Card, List } from "react-native-paper";
import { styles } from "./index.css";
import { useSelector, useDispatch } from "react-redux";

export default function App(props) {
  const { route, navigation } = props;

  const insurance_companies = useSelector(
    (state) => state.insurance_companies.insurance_companies_list,
  );

  const conpanyID = route.params;
  const Company = insurance_companies.find((In) => In.conpanyID == conpanyID);

  // React.useEffect(() => {
  //   console.log(Company);
  // }, []);

  // items

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: Company.companyTitle,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <List.Item
        descriptionNumberOfLines={10}
        title="Company information"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
      />
      <List.Item title="Message" description="" />
      <List.Item title="Website" description="Example@example.com" />
      <List.Item title="Email" description="email@example.com" />
      <List.Item title="Phone number" description="020-824-4653" />
    </View>
  );
}
