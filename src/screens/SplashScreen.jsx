import { ActivityIndicator, Text } from "react-native-paper";
import { View } from "react-native";

export default function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate("TabsNavigation");
  }, 3000);

  return (
    <View>
      <ActivityIndicator color="#F28705" />
      <Text>
        <h1>Aguarde um instante</h1>
      </Text>
    </View>
  );
}
