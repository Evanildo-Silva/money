import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.card_bg,
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerIcon: {
    flex: 3,
    justifyContent: "center",
  },
  icon: {
    width: 35,
    height: 35,
  },
  containerDescription: {
    flex: 10,
  },
  category: {
    fontSize: FONT_SIZE.sm,
    fontWeight: "bold",
    color: COLORS.dark_gray,
  },
  description: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray,
  },
  containerValue: {
    flex: 4,
  },
  value: {
    fontSize: FONT_SIZE.sm,
    fontWeight: "bold",
    color: COLORS.dark_gray,
    textAlign: "right",
  },
});

export { styles };
