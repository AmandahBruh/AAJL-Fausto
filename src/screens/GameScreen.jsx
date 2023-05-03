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
      img: "nezuco-morre.jpg",
    },
    {
      pergunta: "Quantos Onis Tanjiro matou?",
      resposta1: 4,
      resposta2: 10,
      img: "tanjiro.png",
    },
    {
      pergunta: "Qual o objetivo de Demon Slayer?",
      resposta1: "Achar a cura para salvar a Nezuko",
      resposta2: "Matar Onis",
      img: "objetivodemon-slayer-3.jpg",
    },
    {
      pergunta: "Qual o nome do corvo de Tanjiro?",
      resposta1: "Ytagarasu",
      resposta2: "Jiummi",
      img: "corvotanjiro4.png",
    },
    {
      pergunta: "Tanjiro usa a respiração do sol?",
      resposta1: "Sim",
      resposta2: "Não",
      img: "respiracao-do-sol-tanjiro.jpg",
    },
  ];

  function aparecerAsPerguntas() {
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <>
        <Image
          source={require(`../img/${currentQuestion.img}`)}
          style={{ width: 250, height: 150 }}
        />

        <Text style={styles.text}>
          {currentQuestion.pergunta}
        </Text>

        <Button 
          mode="contained" 
          style={styles.button}
        >
          {currentQuestion.resposta1}
        </Button>

        <Button 
          mode="contained" 
          style={styles.button}
        >
          {currentQuestion.resposta2}
        </Button>

        <Button
          mode="contained"
          style={styles.button}
          onPress={() =>
            setCurrentQuestionIndex(
              (currentQuestionIndex + 1) % questions.length
            )
          }
        >
          Mudar Pergunta
        </Button>
      </>
    );
  }

  return <View style={styles.container}>{aparecerAsPerguntas()}</View>;
}
