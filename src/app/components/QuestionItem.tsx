import { useState } from "react";
import { Question } from "../types/question";

type Props = {
    question: Question;
    count: number,
    onAnswer: (answer: number) => void;
}

export const QuestionItem = ({question, count, onAnswer }: Props) => {

    const[selectAnswer, setSelectAnswer] = useState<number | null>(null);

    const checkQuestion = (key: number) => {
        if(selectAnswer === null){
            setSelectAnswer(key);
            
            setTimeout(() => {
                onAnswer(key);
                setSelectAnswer(null);
            }, 1500);
        }
    }

    return (
        <div>
            <div className="text-xl font-bold mb-5">{count}. {question.question}</div>
            <div>
                {question.options.map((item, key) => (
                    <div
                        key={key}
                        onClick={() => checkQuestion(key)}
                        className={`border border-blue-300 px-3 py-2 rounded-md text-l mb-4 cursor-pointer bg-blue-100
                        
                        ${selectAnswer !== null ? 'cursor-auto' : ' cursor-pointer hover:opacity-60'}

                        ${selectAnswer !== null && selectAnswer === question.answer && selectAnswer === key && 'bg-green-300 border' }
                        ${selectAnswer !== null && selectAnswer !== question.answer && selectAnswer === key && 'bg-red-300 border' }

                        `}
                    >{item}</div>
                ))}
            </div>
        </div>
    )
}