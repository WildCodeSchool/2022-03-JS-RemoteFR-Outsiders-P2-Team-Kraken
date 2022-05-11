import { useState, createContext } from "react";

const TimerContext = createContext();

function TimerContextProvider({ children }) {
  const [timer, setTimer] = useState();
  /* eslint-disable */
  return (
    <TimerContext.Provider value={{ timer, setTimer }}>
      {children}
    </TimerContext.Provider>
  );
  /* eslint-enable */
}

export { TimerContext, TimerContextProvider };
