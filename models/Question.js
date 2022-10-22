/*
    MODEL OF OBJECT
*/
export class Question{
    /**
     * 
     * @param {string} text this is the text of the question
     * @param {Array} choises 
     * @param {string} answer 
     */
    
    constructor(text, choises, answer){
        this.text = text;
        this.choises = choises;
        this.answer = answer;
    }
    /**
     * 
     * @param {string} choise 
     * @returns {boolean} return true if the answer is correct
     */
    correctAnswer(choise){
        // if(this.answer === choise){
        //     return true;
        // }
        // return false;
        return this.answer === choise;
    }
}