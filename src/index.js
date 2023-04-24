import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import CadastrarScreen from "./screens/CadastrarScreen";
import RecSenhaScreen from "./screens/RecSenhaScreen";

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

const Tabs = createNativeStackNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator
      // cardStyle={{backgroundColor:'transparent'}}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00305A',
        },

        headerTitleStyle: {
          color: '#00305A'
        },

        headerTintColor: '#fff',

      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false
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
          tabBarLabel: "Cadastrar",
        }}
      />
      <Tabs.Screen
      name="RecSenhaScreen"
      component={RecSenhaScreen}
      options={{
        tabBarLabel: "RecSenhaScreen",
      }}
    />
    </Tabs.Navigator>
  );
}
