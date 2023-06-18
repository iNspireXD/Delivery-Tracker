import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { useNavigation } from "@react-navigation/native";
import { Card, Icon } from "@rneui/themed";
import { CutomerScreenNavigationProp } from "../screens/CustomersScreen";

type Props = {
  userId: string;
  name: string;
  email: string;
};

const CustomerCard = ({ userId, name, email }: Props) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  const navigation = useNavigation<CutomerScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("MyModel", { name: name, userId: userId })
      }
    >
      <Card containerStyle={{ padding: 20, borderRadius: 8 }}>
        <View>
          <View className="flex-row justify-between">
            <View>
              <Text className="text-2xl font-bold">{name}</Text>
              <Text className="text-sm" style={{ color: "#59c1cc" }}>
                ID: {userId}
              </Text>
            </View>

            <View className="flex-row items-center justify-end">
              <Text style={{ color: "#59c1cc" }}>
                {loading ? "loading..." : `${orders.length} x`}
              </Text>
              <Icon
                style={{ marginBottom: 20, marginLeft: "auto" }}
                name="box"
                type="entypo"
                color="#59C1CC"
                size={50}
              />
            </View>
          </View>
        </View>
        <Card.Divider />
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
