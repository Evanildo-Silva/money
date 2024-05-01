import { Image, View } from "react-native";
import icons from "../../constants/icons";
import { useGetExpenses } from "../../hooks/useGetExpenses";
import { PrimaryCard } from "../primaryCard";
import { styles } from "./style";

function Header() {
  const { totalExpenses } = useGetExpenses();
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icons.logo} />
      <PrimaryCard value={totalExpenses} />
    </View>
  );
}

export { Header };
