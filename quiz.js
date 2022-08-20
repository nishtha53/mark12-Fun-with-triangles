const quizFormValue = document.querySelector('.quiz-form');
const submitAnswer = document.querySelector('#submit-answer-btn');
const outputScore = document.querySelector('#output');

const correctAnswer = [
    "90°",
    "Right angled",
    "Polygon",
    "3",
    "Equilateral",
    "A geometric figure",
    "2",
    "3",
    "Isosceles",
    "Hypotenuse"
];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizFormValue);
    console.log(formResults);
    for(let value of formResults.values()){
        // console.log(value);
        if(value === correctAnswer[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    outputScore.innerText = "Your score is " + score;
    console.log(outputScore);
}



submitAnswer.addEventListener('click', calculateScore);