import { questions } from './data/questions.js';
import { Quiz } from './models/Quiz.js';
import { UI } from './models/UI.js';


/**
 * 
 * @param {Quiz} quiz 
 * @param {UI} ui 
 */


const renderPage = (quiz, ui) => {
    if(quiz.isEnded()){
        ui.showScores(quiz.score);
    }else{
        ui.clearContainer(); 
        ui.showQuestions(quiz.getQuestionIndex().text);   
        quiz.getQuestionIndex().choises.forEach(element => {
            ui.showOptions(element, () => { 
                //FUNCIONES QUE ACCIONARA EL BOTÓN AL HACER CLICK
                quiz.guess(element)
                    renderPage(quiz,ui);
                

            });
        });
        ui.progressBar(quiz.questionIndex + 1, quiz.questions.length);

    }

}


function main(){
    const quiz = new Quiz(questions);
    const ui = new UI(); //Render UI
    renderPage(quiz, ui);

}

main();