import { Image, ImageSourcePropType, Text, View } from "react-native";
import { styles } from "./style";

export type SecondaryCardProps = {
  icon: ImageSourcePropType | string;
  category: string;
  description: string;
  value: number;
};

function SecondaryCard({
  icon,
  category,
  description,
  value,
}: SecondaryCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Image style={styles.icon} source={{ uri: icon.toString() }} />
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.category}>{category}</Text>
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
