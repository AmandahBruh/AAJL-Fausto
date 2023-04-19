// import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View, TextInput } from "react-native";
import { Button, Text } from "react-native-paper";
// import { auth } from "../config/Firebase";

import styles from "../utils/styles";

export default function LoginScreen() {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <h1>Login </h1>
      </Text>

      <TextInput
        style={styles.input}
        label="E-mail"
        placeholder="Digite seu e-mail..."
        multiline={false}
        />

      <TextInput
        style={styles.input}
        label="Senha"
        secureTextEntry={true}
        placeholder="Digite sua Senha..."
        multiline={false}
      />

      <Button style={styles.button} mode="contained">
        Login
      </Button>
    </View>
  );
}
