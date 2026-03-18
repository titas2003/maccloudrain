import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AdvocateRegisterScreen from "../screens/AdvocateRegisterScreen";
import ProfileSetupScreen from "../screens/ProfileSetupScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tabs (Main App)
function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dashboard" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileSetupScreen} />
    </Tab.Navigator>
  );
}

// Root Navigation
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Register" component={AdvocateRegisterScreen} />
        <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
        <Stack.Screen name="MainApp" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}