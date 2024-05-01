import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  containerTitleList: {
    width: "100%",
  },
  titleList: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray,
    marginTop: 16,
    fontWeight: "bold",
    paddingHorizontal: 16,
    textAlign: "left",
  },
});

export { styles };
