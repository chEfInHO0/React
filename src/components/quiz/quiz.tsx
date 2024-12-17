import { Quest } from "./question";
import { questions } from "@/data/questions";
import { useState } from "react";

export const Quiz = () => {
  const [currentId, setCurrentId] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(loadQuestion);
  function loadQuestion() {
    const q = questions.filter((q) => q.id === currentId)[0];
    setCurrentId(currentId + 1);
    return q;
  }
  function updateQuestion() {
    if (currentQuestion) {
      const q = questions.filter((q) => q.id === currentId)[0];
      setCurrentId(currentId + 1);
      setCurrentQuestion(q);
    } else {
      setCurrentId(2);
      setCurrentQuestion(questions.filter((q) => q.id === 1)[0]);
    }
  }
  return (
    <>
      <Quest question={currentQuestion} onClick={updateQuestion} />
    </>
  );
};
