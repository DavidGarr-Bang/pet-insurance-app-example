import * as React from "react";
import {
  NavigationContainer,
  NavigationHelpersContext,
} from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import Home from "../screens/home/";
import Pet_Details from "../screens/pet_details/";
import Add_Pet from "../screens/add_pet/";
import In_companies from "../screens/in_companies/";
import In_details from "../screens/in_details/";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="Pet_Details"
          component={Pet_Details}
          options={{
            title: "Pet details",
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
