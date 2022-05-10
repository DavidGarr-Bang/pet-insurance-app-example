import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

import { styles } from "./index.css";

import HomeScreen from "../home/index";
import ProfileScreen from "../profile/index";

const MyComponent = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "view-dashboard-outline" },
    { key: "profile", title: "Profile", icon: "account-outline" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <HomeScreen {...props} />,
    profile: () => <ProfileScreen {...props} />,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;
