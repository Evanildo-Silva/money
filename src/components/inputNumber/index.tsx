import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./style";

type InputNumberProps = TextInputProps & {
  label: string;
};

function InputNumber(props: InputNumberProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input} keyboardType="decimal-pad" {...props} />
    </View>
  );
}

export { InputNumber };
