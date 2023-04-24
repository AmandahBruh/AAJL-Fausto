// import { createUserWithEmailAndPassword } from "firebase/auth";
import { View, TextInput } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export default function CadastrarScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrarPessoa() {
    console.log(nome);
    console.log(email);
    console.log(senha);

    const docRef = addDoc(collection(db, "pessoas"), {
      nomeDaPessoa: nome,
      emailDaPessoa: email,
      senhaDaPessoa: senha,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <h1>Cadastrar </h1>
      </Text>

      <TextInput
        style={styles.input}
        label="Nome"
        placeholder="Digite seu nome..."
        multiline={false}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        label="E-mail"
        placeholder="Digite seu e-mail..."
        multiline={false}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        label="Senha"
        secureTextEntry={true}
        placeholder="Digite sua Senha..."
        multiline={false}
        value={senha}
        onChangeText={setSenha}
      />

      <Button style={styles.button} mode="contained" onPress={cadastrarPessoa}>
        Cadastrar-se
      </Button>
    </View>
  );
}
