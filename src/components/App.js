import React from "react";
import { useState, useEffect } from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((r) => r.json())
      .then(setTransactions);
  }, []);

  function handleDelete(id) {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  }

  function handleSearch(search) {
    setSearch(search);
  }

  function handleAdd(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }
  

  const displayedTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer
        transactions={displayedTransactions}
        handleDelete={handleDelete}
        handleSearch={handleSearch}
        handleAdd={handleAdd}

      />
    </div>
  );
}

export default App;
