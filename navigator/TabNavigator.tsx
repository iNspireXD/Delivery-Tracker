import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomersScreen from "../screens/CustomersScreen";
import OrdersScreen from "../screens/OrdersScreen";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

type Props = {};

const TabNavigator = (props: Props) => {
  const navigaton = useNavigation();

  useLayoutEffect(() => {
    navigaton.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#59C1CC",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Customers") {
            return (
              <Icon
                name="users"
                type="entypo"
                color={focused ? "#59C1cc" : "gray"}
              />
            );
          } else if (route.name === "Orders") {
            return (
              <Icon
                name="box"
                type="entypo"
                color={focused ? "#EB6A7C" : "gray"}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Customers" component={CustomersScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
