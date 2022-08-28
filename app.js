class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// Create a question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// NOW DISPLAY THE QUESTIONS
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

// GUESS ANSWER
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};

// SHOW QUIZ PROGRESS
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

// SHOW SCORES
function showScores() {
    let quizEndHTML =
        `
    <div class="finish" id="finish-mob">    
        <h1 class="title-finish" id="title-finish-mob">Quiz completato</h1>
        <h2 id='score' class="score-mob"> Hai indovinato: ${quiz.score} su ${quiz.questions.length}</h2>
        <h3 id="trisomie">Livello raggiunto: ${livello.name}</h3>
        <div class="quiz-repeat">
            <a href="index.html">Vuoi rifare il quiz ?</a>
        </div>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [
    new Question(
        "Qual' è la capitale dell' Italia?", ["Roma", "Milano", "Napoli", "Calabria"], "Roma"
    ),
    new Question(
        "Dove si trova la torre Eifel?", ["Tokyo", "Londra", "Parigi", "Mosca"], "Parigi"
    ),
    new Question(
        "Di che colore è il cielo?", ["Rosa", "Rosso", "Blu", "Azurro"], "Azurro"
    ),
    new Question(
        "Dove sorge il sole?", ["Est", "Ovest", "Nord", "Sud"], "Est"
    ),
    new Question(
        "Dove tramonta il sole?", ["Nord", "Est", "Ovest", "Sud"], "Ovest"
    ),
    new Question(
        "Quanto pesa un kg di fieno?", ["100 KG", "10 KG", "0 KG", "1 KG"], "1 KG"
    ),
    new Question(
        "Il nome di lincoln?", ["Abramo", "Biden", "Putin", "Matarella"], "Abramo"
    ),
    new Question(
        "Dove si trova il louvre?", ["Mosca", "Parigi", "Pechino", "Roma"], "Parigi"
    ),
    new Question(
        "Quante calorie ci sono in un bicchiere d'acqua?", ["10", "22", "0", "11"], "0"
    ),
    new Question(
        "Chi è il presidente dell'america?", ["Luis", "Silvio", "Giuseppe", "Biden"], "Python"
    ),
    new Question(
        "Dove si trova l'est sulla cartina?", ["A sinistra", "A destra", "A est", "A ovest"], "A destra"
    ),
    new Question(
        "Cosa più la tiri e più si accorcia?", ["La sigaretta", "Il martello", "Il serpente", "Il Braccio"], "La sigaretta"
    )
];

const livello = {
    id: "1",
    name:"scemo"
}

// INITIALIZE quiz
let quiz = new Quiz(questions);


// display questions
displayQuestion();
