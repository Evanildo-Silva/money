import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    width: "100%",
  },
  label: {
    fontSize: FONT_SIZE.xs,
    color: COLORS.medium_gray,
  },
  input: {
    fontSize: FONT_SIZE.xl,
    fontWeight: "bold",
    borderBottomColor: COLORS.card_bg,
    borderBottomWidth: 2,
    padding: 5,
  },
});

export { styles };
