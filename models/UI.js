export class UI{
    constructor(){}

    /**
     * 
     * @param {string} text question to render
     */
    showQuestions(text){
       const questionTitle = document.getElementById("question");
        questionTitle.innerText = text;
    }

    clearContainer(){
        const questionOptions = document.getElementById("choices");
        questionOptions.innerHTML = "";
    }
    /**
     * 
     * @param {string} option 
     * @param {function} callback 
     */
    showOptions(option, callback){
        const questionOptions = document.getElementById("choices");
        
        const buttonOption = document.createElement("button");
        buttonOption.classList.add("btn", "btn-dark", "w-100", "my-1");
        buttonOption.innerText = option;
        buttonOption.addEventListener('click', () => callback());
        questionOptions.appendChild(buttonOption);
    }
    /**
     * 
     * @param {number} score 
     */
    showScores(score){
        const result = `
            <h1 class="text-center">Result: ${score}</h1>
        `;
        const quizcard = document.getElementById("quizcard");

        quizcard.innerHTML = result;
    }

    progressBar(current, final){
        const message = `Question ${current} of ${final}`;
        const parraph = document.getElementById("process");
        parraph.innerText  = message;
    }
}