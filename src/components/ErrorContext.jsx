import React, { createContext, useState } from "react";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [Error, setError] = useState(null);

  return (
    <StateContext.Provider value={{ Error, setError }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateProvider, StateContext };
