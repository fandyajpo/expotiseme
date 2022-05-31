import React from "react";
import { StatusBar } from "react-native";
import { DripsyProvider, makeTheme } from "dripsy";
import { DripsyTheme } from "./dripsy.config";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./components/screens/Home";
import Shop from "./components/screens/Shop";

export const Drip = makeTheme(DripsyTheme); //place it in listfunction file
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <DripsyProvider theme={Drip}>
      <StatusBar />
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Shop' component={Shop} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <NavigationContainer>
        <Tab.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Shop' component={Shop} />
          {/* <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Shop' component={Shop} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </DripsyProvider>
  );
}
