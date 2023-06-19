import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { STEPZEN_API_KEY } from "@env";

const client = new ApolloClient({
  uri: "https://badbramstedt.stepzen.net/api/khaki-starfish/__graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: `Apikey ${STEPZEN_API_KEY}`,
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
