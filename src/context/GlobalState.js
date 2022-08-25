import React, { Children, createContext, useReducer } from "react";

//import reducer
import AppReducer from "./AppReducer";
//Create the initial state

const initialState = {
  transactions: [
    {
      id: 1,
      description: "Income 1",
      transactionsamount: 1000,
    },
    {
      id: 2,
      description: "Expense 1",
      transactionsamount: -200,
    },
    {
      id: 3,
      description: "Income 2",
      transactionsamount: 2000,
    },
    {
      id: 4,
      description: "Expense 2",
      transactionsamount: -500,
    },
  ],
};

//Create the Global Context

export const GLobalContext = createContext(initialState);

//Create a provider for Global Context

export const GlobalProvider = ({ children }) => {
  //   const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GLobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GLobalContext.Provider>
  );
};
