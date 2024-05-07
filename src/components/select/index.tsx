import { Picker, PickerProps } from "@react-native-picker/picker";
import { Text, View } from "react-native";
import { styles } from "./style";

type SelectProps = PickerProps & {
  label: string;
  data: {
    id: string;
    value: string;
  }[];
};

function Select(props: SelectProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <Picker {...props}>
        {props.data.map((item) => (
          <Picker.Item key={item.id} label={item.value} value={item.value} />
        ))}
      </Picker>
    </View>
  );
}

export { Select };
