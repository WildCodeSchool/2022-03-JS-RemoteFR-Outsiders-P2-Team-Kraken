import React, { createContext, useState } from "react";

const QuestionContext = createContext();

function QuestionContextProvider({ children }) {
  const [nbQuestion, setNbQuestion] = useState(0);
  /* eslint-disable */

  /* eslint-disable */
  return (
    <QuestionContext.Provider value={{ nbQuestion, setNbQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
  /* eslint-enable */
}

export { QuestionContext, QuestionContextProvider };
