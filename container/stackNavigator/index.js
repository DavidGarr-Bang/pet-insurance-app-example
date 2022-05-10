import * as React from "react";
import {
  NavigationContainer,
  NavigationHelpersContext,
} from "@react-navigation/native";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import "react-native-gesture-handler";

import { Appbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

// import screens
import Home from "../screens/homeTabs";
import Pet_Details from "../screens/pet_details/";
import edit_pet_details from "../screens/edit_pet_details/";
import Add_Pet from "../screens/add_pet/";
import In_companies from "../screens/in_companies/";
import In_details from "../screens/in_details/";
import Using_in_details from "../screens/using_in_details";

import Personal_details from "../screens/personal_details/";
import About from "../screens/about/";
import Message_center from "../screens/message_center";

const Stack = createStackNavigator();

function CustomNavigationBar(props) {
  const { navigation, back, options } = props;

  return (
    <Appbar.Header>
      <StatusBar style="light" />
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={options.title} />

      {options.headerRight ? options.headerRight() : null}
    </Appbar.Header>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Your Pet Insrance",
          }}
        />

        <Stack.Screen
          name="Pet_Details"
          component={Pet_Details}
          options={{
            title: "Pet Details",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />

        <Stack.Screen
          name="edit_pet_details"
          component={edit_pet_details}
          options={{
            title: "Edit Details",
          }}
        />

        <Stack.Screen
          name="personal_details"
          component={Personal_details}
          options={{
            title: "Personal details",
          }}
        />

        <Stack.Screen
          name="about"
          component={About}
          options={{
            title: "About",
          }}
        />

        <Stack.Screen
          name="message_center"
          component={Message_center}
          options={{
            title: "Message center",
          }}
        />

        <Stack.Screen
          name="Add_Pet"
          component={Add_Pet}
          options={{
            title: "Add Pet",
          }}
        />

        <Stack.Screen
          name="In_companies"
          component={In_companies}
          options={{
            title: "Insurance companies",
          }}
        />
        <Stack.Screen
          name="In_details"
          component={In_details}
          options={{
            title: "Insurance company",
          }}
        />
        <Stack.Screen name="Using_in_details" component={Using_in_details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
