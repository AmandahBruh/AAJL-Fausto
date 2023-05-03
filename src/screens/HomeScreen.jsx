import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import styles from "../utils/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem Vindo a Home</Text>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        Login
      </Button>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => {
          navigation.navigate("CadastrarScreen");
        }}
      >
        Cadastrar
      </Button>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => {
          navigation.navigate("RecSenhaScreen");
        }}
      >
        Redefinir Senha
      </Button>
  
    </View>
  );
}
