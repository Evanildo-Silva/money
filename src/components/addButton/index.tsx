import { Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import icons from "../../constants/icons";
import { styles } from "./style";

type AddButtonProps = TouchableOpacityProps;

function AddButton(props: AddButtonProps) {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Image source={icons.add} />
    </TouchableOpacity>
  );
}

export { AddButton };
