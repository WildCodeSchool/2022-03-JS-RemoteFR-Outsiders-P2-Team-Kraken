import { useState, createContext } from "react";

const Timer5Context = createContext();

function Timer5ContextProvider({ children }) {
  const [timer5, setTimer5] = useState();
  /* eslint-disable */
  return (
    <Timer5Context.Provider value={{ timer5, setTimer5 }}>
      {children}
    </Timer5Context.Provider>
  );
  /* eslint-enable */
}

export { Timer5Context, Timer5ContextProvider };
