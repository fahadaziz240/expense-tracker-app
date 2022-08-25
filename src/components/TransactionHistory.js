import { GLobalContext } from "../context/GlobalState";
import React, { useContext } from "react";

//import transaction

import { Transaction } from "./Transactons";

export const TransactionHistory = () => {
  const { transactions } = useContext(GLobalContext);
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((transactions) => (
          <Transaction key={transactions.id} transactions={transactions} />
        ))}
      </ul>
    </div>
  );
};
