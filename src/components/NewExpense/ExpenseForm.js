import React, { useState } from "react";
import './ExpenseForm.css'

function ExpenseForm({onCancelNewExpense, onSaveExpenseData}) {

  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  /* const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  }) */

  const titleChangeHandler = (event)=>{
    setEnteredTitle(event.target.value)
    /* setUserInput({
      ...userInput,
      enteredTitle: event.target.value
    }); */
    /*
    * The Best aternative to update a state that depends on a previous state is by
    * using an arrow function and passing the prev state as a param. Remember thar React
    * schedules state updates so by using this approach React guarantees the use of the
    * most recently updated state snapshot (takes every schedule state update task into account)
    */
    /* setUserInput((prevState) => {
      return {...prevState, enteredTitle: event.target.value}
    }) */
  }

  const amountChangeHandler = (event)=>{
    setEnteredAmount(event.target.value)
    /* setUserInput({
      ...userInput,
      enteredAmount: event.target.value
    }); */
  }

  const dateChangeHandler = (event)=>{
    setEnteredDate(event.target.value)

    /* setUserInput({
      ...userInput,
      enteredDate: event.target.value
    }); */
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: parseFloat(enteredAmount).toFixed(2),
      date: new Date(enteredDate.replaceAll('-', '/'))
    };

    onSaveExpenseData(expenseData);

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form className="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancelNewExpense}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
