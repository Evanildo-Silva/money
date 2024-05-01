import { Image, ScrollView, View } from "react-native";
import icons from "../../constants/icons";
import { styles } from "./style";

function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icons.logo} />
      <ScrollView></ScrollView>
    </View>
  );
}

export { Home };
