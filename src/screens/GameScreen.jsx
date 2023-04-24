
import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../utils/styles";


export default function GameScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jogo</Text>
    </View>
  );
}
