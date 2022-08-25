import { GLobalContext } from "../context/GlobalState";
import React, { useContext } from "react";

export const TransactionHistory = () => {
  const { transactions } = useContext(GLobalContext);
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((elem, index) => {
          return (
            <li className="plus" key={elem.id}>
              {elem.description}
              <span>{elem.transactionsamount}</span>
              <button className="btn-plus">X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
