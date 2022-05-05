import { useState, createContext } from "react";

const TimerContext = createContext();

function TimerContextProvider({ children }) {
  const [timer, setTimer] = useState();
  return (
    <TimerContext.Provider value={{ timer, setTimer }}> {/* eslint-disable-line */}
      {children}
    </TimerContext.Provider>
  );
}

export { TimerContext, TimerContextProvider };
