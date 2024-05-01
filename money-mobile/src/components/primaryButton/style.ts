import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-end",
  },
  button: {
    width: 150,
    padding: 10,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
  },
  label: {
    color: COLORS.white,
    fontSize: FONT_SIZE.md,
    textAlign: "center",
  },
});

export { styles };
