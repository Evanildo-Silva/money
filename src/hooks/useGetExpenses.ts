import { useEffect, useState } from "react";

// TODO: Refatorar após a criação da api do projeto e remover o mock.
type UseGetExpensesProps = {
  id: number;
  icon: string;
  category: string;
  description: string;
  value: number;
};

function useGetExpenses() {
  const [expenses, setExpenses] = useState<UseGetExpensesProps[]>([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  async function getExpenses() {
    fetch("https://663273f5c51e14d695648084.mockapi.io/expenses")
      .then((res) => res.json() as Promise<UseGetExpensesProps[]>)
      .then((data) => {
        setExpenses(data);
        setTotalExpenses(
          data.reduce((prev, current) => {
            return prev + current.value;
          }, 0)
        );
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  useEffect(() => {
    getExpenses();
  }, []);

  return {
    expenses,
    totalExpenses,
  };
}

export { useGetExpenses };
