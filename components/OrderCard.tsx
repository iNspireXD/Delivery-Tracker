import { View, Text } from "react-native";
import React from "react";

type Props = {
  order: Order;
};

const OrderCard = ({ order }: Props) => {
  return (
    <View>
      <Text>OrderCard</Text>
    </View>
  );
};

export default OrderCard;
