import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";

type Props = {};

const CustomersScreen = (props: Props) => {
  return (
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
      <Text>CustomersScreen</Text>
    </SafeAreaView>
  );
};

export default CustomersScreen;
