import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 8,
    padding: 20,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
  },
  value: {
    color: COLORS.white,
    fontSize: FONT_SIZE.xl,
    fontWeight: "bold",
  },
  description: {
    color: COLORS.white,
    fontSize: FONT_SIZE.sm,
  },
  icon: {
    width: 45,
    height: "100%",
  },
});

export { styles };
