import { useState, createContext } from "react";

const Timer5Context = createContext();

function Timer5ContextProvider({ children }) {
  const [timer5, setTimer5] = useState();
  return (
    <Timer5Context.Provider value={{ timer5, setTimer5 }}> {/* eslint-disable-line */}
      {children}
    </Timer5Context.Provider>
  );
}

export { Timer5Context, Timer5ContextProvider };
