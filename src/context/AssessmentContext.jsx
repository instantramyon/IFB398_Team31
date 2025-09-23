import { createContext, useContext, useState } from "react";

const AssessmentContext = createContext(null);

export function AssessmentProvider({ children }) {
  const [answers, setAnswers] = useState({});
  const updateAnswer = (id, value) =>
    setAnswers(prev => ({ ...prev, [id]: value }));

  // toy risk calculation for the POC
  const riskScore = Object.values(answers).filter(v => v === "yes").length;

  return (
    <AssessmentContext.Provider value={{ answers, updateAnswer, riskScore }}>
      {children}
    </AssessmentContext.Provider>
  );
}

export const useAssessment = () => useContext(AssessmentContext);
