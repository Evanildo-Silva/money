import { Text, View } from "react-native";
import { styles } from "./style";

function HeaderList() {
  return (
    <View style={styles.containerTitleList}>
      <Text style={styles.titleList}>Despesas</Text>
    </View>
  );
}

export { HeaderList };
