import { Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import icons from "../../constants/icons";
import { styles } from "./style";

type DeleteButtonProps = TouchableOpacityProps;

function DeleteButton(props: DeleteButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Image source={icons.trash} />
    </TouchableOpacity>
  );
}

export { DeleteButton };
