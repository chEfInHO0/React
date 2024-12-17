import { Question } from "@/types/question";
import { BaseSyntheticEvent } from "react";
import { useState } from "react";

type Props = {
  question: Question;
  onClick: () => void;
};

type Answer = {
  q: string;
  isRight: boolean;
};

export const Quest = ({ question, onClick }: Props) => {
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  //
  function reset() {
    const btns = document.querySelectorAll(".quiz-b");
    btns.forEach((b) => {
      b.classList.replace("success", "neutral");
      b.classList.replace("danger", "neutral");
      b.removeAttribute("disabled");
    });
    onClick();
  }

  function reveal() {
    const next = document.querySelector(".btn-next");
    next?.setAttribute("disabled", "");
    next?.classList.replace("active-btn", "inactive-btn");
    const btns = document.querySelectorAll(".quiz-b");
    btns.forEach((b) => {
      if (b.textContent === question.answer) {
        !b.classList.contains("success")
          ? b.classList.replace("neutral", "success")
          : null;
      }
      b.setAttribute("disabled", "");
    });
  }

  function checkAnswer() {
    const selected = document.querySelector(".selected");
    let rightAnswer = null;
    if (selected) {
      if (selected?.textContent === question.answer) {
        rightAnswer = true;
        setScore(score + 1);
        selected.classList.replace("selected", "success");
      } else {
        rightAnswer = false;
        selected.classList.replace("selected", "danger");
      }
      setAnswers([...answers, { q: question.question, isRight: rightAnswer }]);
      reveal();
      setTimeout(() => {
        reset();
      }, 1500);
    }
  }

  function handleClick(e: BaseSyntheticEvent) {
    const next = document.querySelector(".btn-next");
    next?.removeAttribute("disabled");
    next?.classList.replace("inactive-btn", "active-btn");
    const clicked = e.currentTarget.textContent;
    const btns = document.querySelectorAll(".quiz-b");
    btns.forEach((b) => {
      b.textContent === clicked
        ? b.classList.replace("neutral", "selected")
        : b.classList.replace("selected", "neutral");
    });
  }
  if (question) {
    return (
      <div className="card">
        <h2 className="title">{question.question}</h2>
        {question.choices.map((c, key) => (
          <button
            className="option neutral quiz-b"
            key={key}
            onClick={handleClick}
          >
            {c}
          </button>
        ))}
        <div className="border-t-2 w-full mt-4">
          <button className="btn inactive-btn btn-next" onClick={checkAnswer}>
            Confirmar
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="font-bold mt-8">
          Você acertou {score} pergunta{score != 1 ? "s" : ""}
        </div>
        <div>
          {answers.map((a, key) => {
            return (
              <div className="flex p-3 mt-5" key={key}>
                <div className="px-2">{a.q}</div>
                <div className="font-bold">
                  {a.isRight ? "Acertou" : "Errou"}
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="active-btn btn"
          onClick={() => {
            onClick();
            setAnswers([]);
            setScore(0);
          }}
        >
          Recomeçar
        </button>
      </div>
    );
  }
};
