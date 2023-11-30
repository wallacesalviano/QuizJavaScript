"use client"

import React, { use, useState } from "react";
import { questions } from "./data/questions";
import { QuestionItem } from "./components/QuestionItem";
import { Results } from "./components/Results";

const Page = () => {
  const [answers, setAnswer] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const title = 'Teste seus conhecimento sobre JavaScript';
  const titleResult = 'Resultado das suas respostas'

  const loadNextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  const handleAnswered = (answer: number) => {
    setAnswer([...answers, answer]);
    loadNextQuestion()
  }


  const handleRestartGame = () => {
    setAnswer([]);
    setCurrentQuestion(0);
    setShowResult(false);
  }


  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-gray-100 text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          {!showResult &&
            <QuestionItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
          }

          {showResult && 
            <Results questions={questions} answers={answers} />
          }
        </div>

        <div className="p-5 text-center border-t border-gray-300">
          {!showResult && 
            `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`
          }
          {showResult &&
            <button onClick={handleRestartGame} className="py-2 px-3 rounded-md bg-blue-800 text-white hover:opacity-80">Reiniciar o Quiz</button>
          }
        </div>

      </div>
    </div>
  )
};

export default Page;