import React, { FC } from "react";
import clsx from "clsx";
import { View, Text, Platform } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/Ionicons";

import { RootStackParamList } from "../types/navigation.type";

import HomeScreen from "../pages/HomeScreen";

interface IBottomNavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "BottomNavigation">;
}

const BottomNav = createBottomTabNavigator();

const BottomNavigation: FC<IBottomNavigationProps> = () => {
  return (
    <BottomNav.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: true,
        headerTitleAlign: "center",
        tabBarStyle: {
          backgroundColor: "#010C1E",
          height: 90,
          paddingBottom: 0,
          borderTopColor: "#6C6E76",
        },
        headerRightContainerStyle: {
          paddingRight: 10,
        },
        tabBarIconStyle: {
          width: "100%", // Make sure the tab bar item stretch in large screens
        },
      }}>
      <BottomNav.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <View className={clsx("flex flex-col items-center justify-center")}>
              <Icon
                name="home"
                size={20}
                color={focused ? "#CCCCCC" : "#6C6E76"}
              />
              <Text
                className={clsx(
                  "pt-1.5 text-xs font-semibold text-gray-dark",
                  focused && "text-gray-medium",
                )}>
                Home
              </Text>
            </View>
          ),
        })}
      />

      <BottomNav.Screen
        name="ScheduleScreen"
        component={HomeScreen}
        options={() => ({
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <View className={clsx("flex flex-col items-center justify-center")}>
              <Icon
                name="calendar"
                size={20}
                color={focused ? "#CCCCCC" : "#6C6E76"}
              />
              <Text
                className={clsx(
                  "pt-1.5 text-xs font-semibold text-gray-dark",
                  focused && "text-gray-medium",
                )}>
                Schedule
              </Text>
            </View>
          ),
        })}
      />

      <BottomNav.Screen
        name="ProfileScreen"
        component={HomeScreen}
        options={() => ({
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <View className={clsx("flex flex-col items-center justify-center")}>
              <Icon
                name="person"
                size={20}
                color={focused ? "#CCCCCC" : "#6C6E76"}
              />
              <Text
                className={clsx(
                  "pt-1.5 text-xs font-semibold text-gray-dark",
                  focused && "text-gray-medium",
                )}>
                Profile
              </Text>
            </View>
          ),
        })}
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigation;
