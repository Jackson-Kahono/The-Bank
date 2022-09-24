import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, handleDelete }) {
  function deleteTransaction(id) {
    fetch("http://localhost:8001/transactions/" + id, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDelete(id));
  }

  const transactionItems = transactions.map((transaction,key) => (
    <Transaction
      key={key}
      id={transaction.id}
      date={transaction.date}
      description={transaction.description}
      category={transaction.category}
      amount={transaction.amount}
      handleDelete={deleteTransaction}
    />
  ));

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactionItems}
       
      </tbody>
    </table>
  );
}

export default TransactionsList;
