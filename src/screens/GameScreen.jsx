import { Image, View } from "react-native";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import styles from "../utils/styles";

export default function GameScreen({ navigation }) {
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
    const perguntas = questions.map((question) => {
      return <Text style={styles.text}>{question.pergunta}</Text>;
    });

    return perguntas
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>*Pergunta*</Text> */}
      {aparecerAsPerguntas()}
      <Image
        source={require("../img/tanjiro.png")}
        style={{ width: 250, height: 150 }}
      />
      <Button mode="contained" style={styles.button}>
        Sim
      </Button>
      <Button mode="contained" style={styles.button}>
        Não
      </Button>
      <Button mode="contained" style={styles.button}>
        Mudar Pergunta
      </Button>
    </View>
  );
}
