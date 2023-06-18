import { View, Text } from "react-native";
import React from "react";
import { Card, Divider, Icon } from "@rneui/themed";

type Props = {
  order: Order;
};

const DeliveryCard = ({ order }: Props) => {
  return (
    <Card
      containerStyle={{
        borderRadius: 8,
        padding: 0,
        marginVertical: 6,
        paddingTop: 16,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        backgroundColor: "#59c1cc",
      }}
    >
      <View>
        <Icon name="box" type="entypo" color="white" size={50} />
        <View>
          <Text className="text-center text-xs uppercase text-white font-bold">
            {order.carrier} - {order.trackingId}
          </Text>
          <Text className="text-white text-center text-lg font-bold">
            Expected Deivery: {new Date(order.createdAt).toLocaleDateString()}
          </Text>
          <Divider color="white" />
        </View>

        <View className="mx-auto">
          <Text className="text-base text-center text-white font-bold mt-5">
            Address
          </Text>
          <Text className="text-center text-white text-sm">
            {order.Address}, {order.City}
          </Text>

          <Text className="text-sm text-center text-white">
            Shipping Cost: ${order.shippingCost}
          </Text>
        </View>
      </View>
      <Divider color="white" />

      <View className="p-5">
        {order.trackingItems.items.map((item) => (
          <View className="flex-row justify-between items-center">
            <Text className="text-sm text-white">{item.name}</Text>
            <Text className="text-xl text-white">x {item.quantity}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
};

export default DeliveryCard;
