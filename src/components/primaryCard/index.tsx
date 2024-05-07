import { Image, Text, View } from "react-native";
import icons from "../../constants/icons";
import { styles } from "./styles";

type PrimaryCardProps = {
  value: number;
};

function PrimaryCard({ value }: PrimaryCardProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.value}>{`R$ ${value.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        })}`}</Text>
        <Text style={styles.description}>Total de Gastos</Text>
      </View>
      <Image style={styles.icon} source={icons.dollar} />
    </View>
  );
}

export { PrimaryCard };
