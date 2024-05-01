import { Image, View } from "react-native";
import { PrimaryCard } from "../../components/primaryCard";
import icons from "../../constants/icons";
import { styles } from "./style";

function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icons.logo} />
      <PrimaryCard />
    </View>
  );
}

export { Home };
