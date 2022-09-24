import React from "react";
import { useState } from "react";

function AddTransactionForm({handleAdd}) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      date: date,
      description: description,
      category: category,
      amount: amount,
    };
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((r) => r.json())
      .then(()=>{
        handleAdd(newTransaction)
        setDate("")
        setDescription("")
        setCategory("")
        setAmount("")
      });
  }






  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange={
            (e)=>setDate(e.target.value)
          } value={date} />
          <input type="text" name="description" placeholder="Description" onChange={
            (e)=>setDescription(e.target.value)
          } value={description} />
          <input type="text" name="category" placeholder="Category" onChange={
            (e)=>setCategory(e.target.value)
          } value={category} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={
            (e)=>setAmount(e.target.value)
          } value={amount} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
