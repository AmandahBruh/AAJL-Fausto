import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import CadastrarScreen from "./screens/CadastrarScreen";

export default function RootNavigation() {
  const Tab = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          tabBarLabel: "LoginScreen",
        }}
      />
      <Tabs.Screen
        name="CadastrarScreen"
        component={CadastrarScreen}
        options={{
          tabBarLabel: "CadastrarScreen",
        }}
      />
    </Tabs.Navigator>
  );
}
