
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";


export default function IniciarGameScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Iniciar Jogo</Text>
      <Button style={styles.button} mode="contained" 
      onPress={() => {
        navigation.navigate("GameScreen");
      }}>
        Começar
      </Button>
    </View>
  );
}
