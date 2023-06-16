import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import { Image } from "@rneui/themed";
import { Input } from "@rneui/base";

export type CutomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

type Props = {};

const CustomersScreen = (props: Props) => {
  const navigation = useNavigation<CutomerScreenNavigationProp>();
  const [input, setInput] = useState<string>("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#59C1CC" }}>
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        containerStyle={{ width: "100%", height: 256 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input
        placeholder="Search By Customer"
        value={input}
        onChangeText={(text) => setInput(text)}
        containerStyle={{
          backgroundColor: "white",
          paddingTop: 20,
          paddingBottom: 0,
          paddingHorizontal: 40,
        }}
      />
    </ScrollView>
  );
};

export default CustomersScreen;
