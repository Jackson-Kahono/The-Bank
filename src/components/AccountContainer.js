import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transactions, handleDelete, handleSearch, handleAdd }) {
  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <AddTransactionForm handleAdd={handleAdd}/>
      <TransactionsList transactions={transactions} handleDelete={handleDelete}/>
    </div>
  );
}

export default AccountContainer;
