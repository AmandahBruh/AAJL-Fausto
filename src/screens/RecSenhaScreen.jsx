// import { createUserWithEmailAndPassword } from "firebase/auth";
import { View, TextInput } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";
import { passwordReset } from "../config/firebase";
import { useState } from "react";

export default function RecSenhaScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handlePasswordReset() {
    try {
      await passwordReset(email);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/user-not-found") {
        console.log("Usuário não encontrado");
        setEmail("");
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recuperar Senha</Text>

      <TextInput
        style={styles.input}
        label="E-mail"
        placeholder="Digite seu e-mail..."
        multiline={false}
        value={email}
        onChangeText={setEmail}
      /> 

      <Button
        style={styles.button}
        mode="contained"
        onPress={handlePasswordReset}
      >
        Recuperar Senha
      </Button>
    </View>
  );
}
