import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";

export default function RootNavigation() {

  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="SplashScreen"
          component={SplashScreen}
        />

        <Tab.Screen 
          name="HomeScreen"
          component={HomeScreen}
        />
      </Tab.Navigator >
    </NavigationContainer>
  );
}