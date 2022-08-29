import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {

  const [expensesYear, setExpensesYear] = useState('')
  const filterExpensesHandler = year => {
    setExpensesYear(year);
  }

  const filteredExpenses = expenses.filter(item => {
    return item.date.getFullYear().toString() === expensesYear
  })

 
  return (
      <Card className="expenses">
      <ExpensesFilter selected={expensesYear} onFilterExpenses={filterExpensesHandler}/>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
