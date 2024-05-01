import { Image, Text, View } from "react-native";
import icons from "../../constants/icons";
import { PrimaryCard } from "../primaryCard";
import { styles } from "./style";

function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icons.logo} />
      <PrimaryCard />
      <View style={styles.containerTitleList}>
        <Text style={styles.titleList}>Despesas</Text>
      </View>
    </View>
  );
}

export { Header };
