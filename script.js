const questions = [
    {
        question: "What does poverty mean?",
        answers: [
            { text: "Being extremely smart", correct: false },
            { text: "Being extremely poor", correct: true },
            { text: "Being extremely cool", correct: false },
            { text: "Being extremely sad", correct: false }
        ]
    },
    {
        question: "What is one major cause of poverty in the Philippines?",
        answers: [
            { text: "Lack of access to quality education", correct: true },
            { text: "High literacy rates", correct: false },
            { text: "Too many job opportunities", correct: false },
            { text: "Low population growth", correct: false }
        ]
    },
    {
        question: "What is an effective way to reduce poverty in the Philippines?",
        answers: [
            { text: "Increasing taxes on the poor", correct: false },
            { text: "Reducing the minimum wage", correct: false },
            { text: "Providing better education and job opportunities", correct: true },
            { text: "Limiting access to healthcare", correct: false }
        ]
    },
    {
        question: "Which government program provides financial aid to poor Filipino families?",
        answers: [
            { text: "TESDA Scholarship Program", correct: false },
            { text: "Pantawid Pamilyang Pilipino Program (4Ps)", correct: true },
            { text: "Pag-IBIG Fund", correct: false },
            { text: "Balik Probinsya Program", correct: false }
        ]
    },
    {
        question: "Where is poverty most common in the Philippines?",
        answers: [
            { text: "Luzon", correct: false },
            { text: "Visayas", correct: false },
            { text: "Mindanao", correct: true },
            { text: "Metro Manila", correct: false }
        ]
    }
];

let index = 0, score = 0;

const questionElement = document.getElementById("question");
const answers = document.getElementById("choices");
const nextButton = document.getElementById("next");

function startQuiz() {
    index = 0;
    score = 0;
    nextButton.style.display = "none";
    displayQuestion();
}

function displayQuestion() {
    questionElement.innerHTML = questions[index].question;
    answers.innerHTML = ""; 

    questions[index].answers.forEach((answer, i) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.onclick = function() {
            check(i, button);
        };
        answers.appendChild(button);
    });
}

function check(choice, selectedButton) {
    if (questions[index].answers[choice].correct) {
        score++;
        selectedButton.style.backgroundColor = "olivedrab";
    } else {
        selectedButton.style.backgroundColor = "indianred";
    }

    nextButton.style.display = "block";

   
    document.querySelectorAll(".btn").forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    index++;
    if (index < questions.length) {
        displayQuestion();
    } else {
        questionElement.innerHTML = "Congrats! You scored " + score + " out of " + questions.length + ".";
        answers.innerHTML = "";
        nextButton.style.display = "none";
        
    }
}

nextButton.onclick = nextQuestion;
startQuiz();