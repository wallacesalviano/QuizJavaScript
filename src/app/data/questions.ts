import { Question } from "../types/question"

export const questions = [
    {
        question: 'Qual é a saída do seguinte código em JavaScript? (console.log(2 + 2 + "5").',
        options: [
            '45',
            '95',
            '22',
            '225'
        ],
        answer: 3
    },

    {
        question: 'O que o método "Array.prototype.map()" faz em JavaScript?',
        options: [
            'Adiciona um elemento no final de um array.',
            'Cria um novo array com os resultados de uma função em cada elemento do array chamado.',
            'Remove o último elemento de um array.',
            'Inverte a ordem dos elementos de um array.'
        ],
        answer: 1
    },

    {
        question: 'Qual das seguintes opções não é um tipo de dado primitivo em JavaScript?',
        options: [
            'String',
            'Number',
            'Array',
            'Boolean'
        ],
        answer: 2
    },
    
    {
        question: 'Qual é a diferença entre let e const ao declarar variáveis em JavaScript?',
        options: [
            '"let" é usado para variáveis que não podem ser alteradas, enquanto const é usado para variáveis cujos valores podem ser reatribuídos.',
            'Ambos são usados para declarar variáveis, mas "let" é usado para variáveis globais e "const" para variáveis locais.',
            '"let" declara variáveis com escopo de bloco que podem ser reatribuídas, enquanto "const" declara variáveis com escopo de bloco cujos valores não podem ser reatribuídos.',
            'Não há diferença entre let e const ao declarar variáveis em JavaScript.'
        ],
        answer: 2
    },

    {
        question: 'O que é o conceito de "callback" em JavaScript?',
        options: [
            'Uma função que é passada como argumento para outra função e executada após um evento assíncrono ou uma operação ser concluída.',
            'Uma função que converte strings em números.',
            'Um método para alterar o escopo de uma variável.',
            'Um método de encapsular código para torná-lo privado em um objeto.'
        ],
        answer: 0
    }

]
