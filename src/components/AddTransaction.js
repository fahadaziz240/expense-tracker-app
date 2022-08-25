import React, { useState } from "react";

export const AddTransaction = () => {
  const [description, setDescription] = useState();
  const [transactionamount, setTransactionamount] = useState();

  return (
    <div>
      <h3>Add Transaction </h3>
      <form>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Details for Transaction"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="transactionamount">Transaction Amount</label>
          <input
            type="number"
            id="transactonamount"
            placeholder="Enter Amount"
            value={transactionamount}
            onChange={(e) => setTransactionamount(e.target.value)}
          ></input>
          <button className="btn">Enter Transaction</button>
        </div>
      </form>
    </div>
  );
};
