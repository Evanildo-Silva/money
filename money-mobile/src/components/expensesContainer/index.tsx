import { ReactNode } from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

type ExpensesContainerProps = {
  children: ReactNode;
};

function ExpensesContainer({ children }: ExpensesContainerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Despesas</Text>
      <View>{children}</View>
    </View>
  );
}

export { ExpensesContainer };
