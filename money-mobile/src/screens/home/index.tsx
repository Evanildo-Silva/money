import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { AddButton } from "../../components/addButton";
import { Header } from "../../components/header";
import { HeaderList } from "../../components/headerList";
import {
  SecondaryCard,
  SecondaryCardProps,
} from "../../components/secondaryCard";
import { useGetExpenses } from "../../hooks/useGetExpenses";
import { StackParamsList } from "../../routes/app.routes";
import { styles } from "./style";

function Home() {
  const { expenses } = useGetExpenses();

  const { navigate } =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<SecondaryCardProps>) => {
      return <SecondaryCard {...item} />;
    },
    []
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        ListHeaderComponent={HeaderList}
        keyExtractor={(item) => item.id.toString()}
        data={expenses}
        renderItem={renderItem}
      />
      <AddButton onPress={() => navigate("cadastrar")} />
    </View>
  );
}

export { Home };
