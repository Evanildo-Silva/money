import { Image, Text, View } from "react-native";
import icons from "../../constants/icons";
import { styles } from "./styles";

function PrimaryCard() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.value}>R$ 5.000,00</Text>
        <Text style={styles.description}>Total de Gastos</Text>
      </View>
      <Image style={styles.icon} source={icons.dollar} />
    </View>
  );
}

export { PrimaryCard };
