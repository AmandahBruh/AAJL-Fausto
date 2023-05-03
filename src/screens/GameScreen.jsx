import { Image, View } from "react-native";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import styles from "../utils/styles";
import React, { useState } from "react";

export default function GameScreen({ navigation }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    {
      pergunta: "Nezuko morre?",
      resposta1: "Não",
      resposta2: "Sim",
    },
    {
      pergunta: "Quantos Onis Tanjiro matou?",
      resposta1: 4,
      resposta2: 10,
    },
    {
      pergunta: "Qual o objetivo de Demon Slayer?",
      resposta1: "Achar a cura para salvar a Nezuko",
      resposta2: "Matar Onis",
    },
    {
      pergunta: "Qual o nome do corvo de Tanjiro?",
      resposta1: "Ytagarasu",
      resposta2: "Jiummi",
    },
    {
      pergunta: "Tanjiro usa a respiração do sol?",
      resposta1: "Sim",
      resposta2: "Não",
    },
  ];

  function aparecerAsPerguntas() {
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <>
        <Text style={styles.text}>{currentQuestion.pergunta}</Text>
        <Button mode="contained" style={styles.button}>
          {currentQuestion.resposta1}
        </Button>
        <Button mode="contained" style={styles.button}>
          {currentQuestion.resposta2}
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() =>
            setCurrentQuestionIndex((currentQuestionIndex + 1) % questions.length)
          }
        >
          Mudar Pergunta
        </Button>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../img/tanjiro.png")}
        style={{ width: 250, height: 150 }}
      />
      {aparecerAsPerguntas()}
    </View>
  );
}
