import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Details from "./screens/Details";
import Home from "./screens/Home";
import Result from "./screens/Result";
import Sreach from "./screens/Sreach";
import EditDelete from "./screens/EditDelete";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Result" component={Result} />
        <Drawer.Screen name="Sreach" component={Sreach} />
        <Drawer.Screen name="Details" component={Details} />
        <Drawer.Screen name="EditDelete" component={EditDelete} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
