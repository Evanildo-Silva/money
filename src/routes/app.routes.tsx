import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home";
import { RegisterExpenses } from "../screens/registerExpenses";

export type StackParamsList = {
  home: undefined;
  cadastrar: undefined;
};

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="cadastrar"
        component={RegisterExpenses}
        options={{
          title: "Despesas",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
export { AppRoutes };
