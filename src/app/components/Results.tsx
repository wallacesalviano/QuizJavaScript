import { Question } from "../types/question"

type Props = {
    questions: Question[];
    answers: Number[];
}

export const Results = ({ questions, answers }: Props) => {    
    return (
        <div>
            {questions.map((item, key) => 
                <div key={key} className="mb-5">
                    <div className="font-bold mb-2">{key + 1}.{item.question}</div>
                    <div>
                        <span>({item.answer === answers[key] ? 'Acertou ✅' : 'Errou ❌'}) - </span>
                        <strong>A resposta correta é: </strong>{item.options[item.answer]}
                    </div>
                </div>
            )}
        </div>
    )
}