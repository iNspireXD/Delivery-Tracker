import { SafeAreaView, Text, View } from "react-native";
import CustomersScreen from "./screens/CustomersScreen";
import SafeAreaViewAndroid from "./components/SafeAreaViewAndroid";

export default function App() {
  return (
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
      <CustomersScreen />
    </SafeAreaView>
  );
}
