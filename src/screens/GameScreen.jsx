
import { Image, View } from "react-native";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import styles from "../utils/styles";


export default function GameScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>*Pergunta*</Text>
       <Image
        source={require('../img/tanjiro.png')}
        style={{width: 250, height: 150}}
       />
       <Button
        mode="contained"
       style={styles.button}>
        Sim
       </Button>
       <Button 
       mode="contained"
       style={styles.button}>
        Não
       </Button>
       <Button 
       mode="contained"
       style={styles.button}>
        Mudar Pergunta
       </Button>

    </View>
  );
}
