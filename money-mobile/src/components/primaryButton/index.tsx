import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { styles } from "./style";

type PrimaryButtonProps = TouchableOpacityProps & {
  label: string;
};

function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} {...props}>
        <Text style={styles.label}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
}

export { PrimaryButton };
