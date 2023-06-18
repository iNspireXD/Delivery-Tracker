import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://badbramstedt.stepzen.net/api/khaki-starfish/__graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization:
      "Apikey " +
      "badbramstedt::stepzen.net+1000::255db4b7702a081113feb5b76777e5817e6b88d7a60f8eb23f361e83b75c3932",
  },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}
