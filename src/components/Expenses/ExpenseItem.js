import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";

function ExpenseItem({ expense }) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expense.date} />
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          <p className="expense-item__price">${expense.amount}</p>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
