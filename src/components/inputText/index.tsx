import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./style";

type InputTextProps = TextInputProps & {
  label: string;
};

function InputText(props: InputTextProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
}

export { InputText };
