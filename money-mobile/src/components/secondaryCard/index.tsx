import { Image, ImageSourcePropType, Text, View } from "react-native";
import { styles } from "./style";

type SecondaryCardProps = {
  icon: ImageSourcePropType;
  title: string;
  description: string;
  value: string;
};

function SecondaryCard({
  icon,
  title,
  description,
  value,
}: SecondaryCardProps) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={icon} />
      </View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{value}</Text>
    </View>
  );
}

export { SecondaryCard };
