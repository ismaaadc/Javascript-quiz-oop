import { Question } from "./Question.js";

export class Quiz{
    questionIndex = 0;
    score = 0;
    /**
     * 
     * @param { Question[] } question 
     */
    constructor(questions){
        this.questions = questions;
    }
    /**
     * 
     * @returns { Question[i] } Retorna la pregunta actual a partir del índice
     */
    getQuestionIndex(){
        //en que pregunta va el usuario
        return this.questions[this.questionIndex];
    }

    isEnded(){
        return this.questionIndex === this.questions.length;
    }

    guess(answer){
        //posible respuesta
        if(this.getQuestionIndex().correctAnswer(answer))
        {
            this.score++
        }
        this.questionIndex++;

    }
}