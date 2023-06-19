import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Card } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import { OrdersScreenNavigationProp } from "../screens/OrdersScreen";
import { useNavigation } from "@react-navigation/native";

type Props = {
  order: Order;
};

const OrderCard = ({ order }: Props) => {
  const navigation = useNavigation<OrdersScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Order", { order: order })}
    >
      <Card containerStyle={{ paddingHorizontal: 20, borderRadius: 8 }}>
        <View className="flex-row items-center justify-between">
          <View>
            <Icon
              name="truck-delivery"
              type="material-community"
              color="#eb6a7c"
            />
            <Text style={{ fontSize: 10 }}>
              {new Date(order.createdAt).toDateString()}
            </Text>
          </View>

          <View>
            <Text className="text-gray-400" style={{ fontSize: 10 }}>
              {order.carrier}-{order.trackingId}
            </Text>
            <Text className="text-gray-500 text-xl">
              {order.trackingItems.customer.name}
            </Text>
          </View>

          <View className="flex-row items-center">
            <Text style={{ color: "#eb6a7c" }} className="text-sm">
              {order.trackingItems.items.length} x
            </Text>
            <Icon style={{ marginLeft: 8 }} name="box" type="feather" />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default OrderCard;
