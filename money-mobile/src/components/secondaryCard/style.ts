import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.card_bg,
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
});

export { styles };
