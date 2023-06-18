import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import { Icon } from "@rneui/themed";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import useCustomerOrders from "../hooks/useCustomerOrders";
import DeliveryCard from "../components/DeliveryCard";

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "MyModel">
>;

type ModalScreenRootProps = RouteProp<RootStackParamList, "MyModel">;

type Props = {};

const ModalScreen = (props: Props) => {
  const navigation = useNavigation<ModalScreenNavigationProp>();
  const {
    params: { name, userId },
  } = useRoute<ModalScreenRootProps>();

  const { loading, error, orders } = useCustomerOrders(userId);

  return (
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
      <TouchableOpacity
        className="absolute right-5 top-12 z-10"
        onPress={navigation.goBack}
      >
        <Icon name="closecircle" type="antdesign" />
      </TouchableOpacity>

      <View style={{ marginTop: 10 }}>
        <View className="py-2 border-b" style={{ borderColor: "#59c1cc" }}>
          <Text
            className="text-center text-xl font-bold"
            style={{ color: "#59c1cc" }}
          >
            {name}
          </Text>
          <Text className="text-center text-sm">Deliveries</Text>
        </View>
      </View>

      <FlatList
        contentContainerStyle={{ paddingBottom: 200 }}
        data={orders}
        keyExtractor={(order) => order.trackingId}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
      />
    </SafeAreaView>
  );
};

export default ModalScreen;
