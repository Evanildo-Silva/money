import { FlatList, View } from "react-native";
import { AddButton } from "../../components/addButton";
import { Header } from "../../components/header";
import { HeaderList } from "../../components/headerList";
import { SecondaryCard } from "../../components/secondaryCard";
import { styles } from "./style";

function Home() {
  const data = [
    {
      id: 1,
      icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-carro.png",
      title: "Carro",
      description: "Pagamento IPVA",
      value: 2500,
    },
    {
      id: 2,
      icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-casa.png",
      title: "Casa",
      description: "Condomínio",
      value: 620,
    },
    {
      id: 3,
      icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-lazer.png",
      title: "Lazer",
      description: "Sorvete no parque",
      value: 17.5,
    },
    {
      id: 4,
      icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png",
      title: "Mercado",
      description: "Pagamento IPVA",
      value: 375,
    },
    {
      id: 5,
      icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-treinamento.png",
      title: "Educação",
      description: "Pagamento IPVA",
      value: 490,
    },
    {
      id: 6,
      icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png",
      title: "Viagem",
      description: "Pagamento IPVA",
      value: 610,
    },
    {
      id: 7,
      icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png",
      title: "Mercado",
      description: "Pagamento IPVA",
      value: 144,
    },
    {
      id: 8,
      icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png",
      title: "Viagem",
      description: "Pagamento IPVA",
      value: 330,
    },
    {
      id: 9,
      icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png",
      title: "Viagem",
      description: "Pagamento IPVA",
      value: 330,
    },
    {
      id: 10,
      icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png",
      title: "Viagem",
      description: "Pagamento IPVA",
      value: 330,
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        ListHeaderComponent={HeaderList}
        keyExtractor={(item) => item.id.toString()}
        data={data}
        renderItem={({ item }) => <SecondaryCard {...item} />}
      />
      <AddButton onPress={() => console.log("===========")} />
    </View>
  );
}

export { Home };
