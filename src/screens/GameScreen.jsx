import { Image, View } from "react-native";
import { Button, Dialog, Portal, Provider } from "react-native-paper";
import { Text } from "react-native-paper";
import styles from "../utils/styles";
import React, { useState } from "react";

export default function GameScreen({ navigation }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [dialog, setDialog] = useState({
    visible: false,
    mensagem: "",
  });

  //alert("Você errou!");

  function Acertou() {
    setPontos((prevPontos) => ++prevPontos);
    // alert("Você Acertou!");
    setDialog({
      visible: true,
      mensagem: "Você Acertou!",
    });
  }
  // console.log(pontos);

  function Errou() {
    setDialog({
      visible: true,
      mensagem: "Você errou!",
    });
  }

  function mudarPergunta() {
    setCurrentQuestionIndex((currentQuestionIndex + 1) % questions.length);
  }

  const questions = [
    {
      pergunta: "Nezuko morre?",
      resposta1: "Não",
      resposta2: "Sim",
      img: "nezuco-morre.jpg",
      id: 1,
    },
    {
      pergunta: "Quantos Onis Tanjiro matou?",
      resposta1: 4,
      resposta2: 10,
      img: "tanjiro.png",
      id: 2,
    },
    {
      pergunta: "Qual o objetivo de Demon Slayer?",
      resposta1: "Achar a cura para salvar a Nezuko",
      resposta2: "Matar Onis",
      img: "objetivodemon-slayer-3.jpg",
      id: 3,
    },
    {
      pergunta: "Qual o nome do corvo de Tanjiro?",
      resposta1: "Ytagarasu",
      resposta2: "Jiummi",
      img: "corvotanjiro4.png",
      id: 4,
    },
    {
      pergunta: "Tanjiro usa a respiração do sol?",
      resposta1: "Sim",
      resposta2: "Não",
      img: "respiracao-do-sol-tanjiro.jpg",
      id: 5,
    },
  ];

  const showDialog = () =>
    setDialog({
      ...dialog,
      visible: true,
    });

  const hideDialog = () => {
    mudarPergunta();
    setDialog({
      ...dialog,
      visible: false,
    });
  };

  function aparecerAsPerguntas() {
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <>
        <Image
          source={require(`../img/${currentQuestion.img}`)}
          style={{ width: 250, height: 150 }}
        />

        <Text style={styles.text1}>{currentQuestion.pergunta}</Text>

        <Button mode="contained" style={styles.button} onPress={Acertou}>
          {currentQuestion.resposta1}
        </Button>

        <Button mode="contained" style={styles.button} onPress={Errou}>
          {currentQuestion.resposta2}
        </Button>

        <Button mode="contained" style={styles.button} onPress={mudarPergunta}>
          Mudar Pergunta
        </Button>
      </>
    );
  }

  return (
    <Provider>
      <View style={styles.container2}>
        <View style={styles.cabeca}>
          <Image source={require(`../img/logo.png`)} style={styles.logo} />

          <Text style={styles.pontos}>{pontos}</Text>
        </View>

        <View>{aparecerAsPerguntas()}</View>
        <Portal>
          <Dialog visible={dialog.visible} onDismiss={hideDialog}>
            <Dialog.Content>
              <Text variant="bodyMedium">{dialog?.mensagem}</Text>
            </Dialog.Content>

            <Dialog.Actions>
              <Button onPress={() => {
                if(pontos == 5) {
                  navigation.navigate("HomeScreen")
                } else {
                  hideDialog()
                }
              }}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
}
