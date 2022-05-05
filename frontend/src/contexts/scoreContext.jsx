import React, { createContext } from "react";

const ScoreContext = createContext();

function ScoreContextProvider({ children }) {
  const [score, setScore] = React.useState(0);
  /* eslint-disable */
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
  /* eslint-enable */
}

export { ScoreContext, ScoreContextProvider };
