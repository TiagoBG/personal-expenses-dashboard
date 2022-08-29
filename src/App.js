import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    date: new Date(2021, 2, 28),
    title: "Car Insurance",
    amount: 294.65,
  },
  {
    id: 2,
    date: new Date(2021, 4, 14),
    title: "Spa Session",
    amount: 75.2,
  },
  {
    id: 3,
    date: new Date(2020, 6, 5),
    title: "Credit Card Payment",
    amount: 8.25,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    console.log(newExpense)
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
