import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense({onAddExpense}) {
  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    onAddExpense(expenseData);
    setShowNewExpenseForm(false);
  }

  const addExpenseButtonHandler = ()=>{
    setShowNewExpenseForm(true)
  }

  const cancelAddNewExpense = () => {
    setShowNewExpenseForm(false)
  }

  return (
    <div className='new-expense'>
        {showNewExpenseForm ? <ExpenseForm onCancelNewExpense={cancelAddNewExpense} onSaveExpenseData={saveExpenseDataHandler}/> : <button type='button' onClick={addExpenseButtonHandler}>Add New Expense</button>}
    </div>
  )
}

export default NewExpense