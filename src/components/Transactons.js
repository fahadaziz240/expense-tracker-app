import React from "react";

export const Transaction = ({ transactions }) => {
  return (
    <li className="plus">
      {transactions.description}
      <span>{transactions.transactionamount}</span>
      <button className="btn-plus">X</button>
    </li>
  );
};
