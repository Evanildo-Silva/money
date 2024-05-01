import { View } from "react-native";
import { DeleteButton } from "../../components/deleteButton";
import { InputNumber } from "../../components/inputNumber";
import { InputText } from "../../components/inputText";
import { PrimaryButton } from "../../components/primaryButton";
import { Select } from "../../components/select";
import { CATEGORIES } from "../../constants/categories";
import { styles } from "./style";

function RegisterExpenses() {
  return (
    <View style={styles.container}>
      <InputNumber label="Valor" placeholder="0,00" defaultValue="0" />
      <InputText placeholder="Ex: Lazer" label="Descrição" />
      <Select label="Categoria" selectedValue={"Mercado"} data={CATEGORIES} />
      <PrimaryButton label="Salvar" />
      <DeleteButton />
    </View>
  );
}

export { RegisterExpenses };
