import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 12,
  },
});

export { styles };
