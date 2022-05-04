import React, { createContext, useState } from "react";

const QuestionContext = createContext();

function QuestionContextProvider({ children }) {
  const [nbQuestion, setNbQuestion] = useState(0);

  return (
    <QuestionContext.Provider value={{ nbQuestion, setNbQuestion }}> {/* eslint-disable-line */}
      {children}
    </QuestionContext.Provider>
  );
}

export { QuestionContext, QuestionContextProvider };
