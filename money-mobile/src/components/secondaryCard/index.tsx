import { Image, ImageSourcePropType, Text, View } from "react-native";
import { styles } from "./style";

type SecondaryCardProps = {
  icon: ImageSourcePropType;
  title: string;
  description: string;
  value: number;
};

function SecondaryCard({
  icon,
  title,
  description,
  value,
}: SecondaryCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Image style={styles.icon} source={icon} />
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.containerValue}>
        <Text style={styles.value}>
          {value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </Text>
      </View>
    </View>
  );
}

export { SecondaryCard };