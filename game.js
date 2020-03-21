var currentQuestion = document.getElementById('question');
var choices  = Array.from(document.getElementsByClassName('choice-text'));
const MAX_QUESTIONS=5;
var availableQuestions=[];
var questionCounter=0;
var isAcceptingAnswers=false;
var printedQuestion={};
var index=0;
var score = 0;
const questionCounterText = document.getElementById('questionCounter');
const scoreText =  document.getElementById('score');
let questions = [
    {
        q1:'java.util.Collections is a:',
        choice1:'Class',
        choice2:'Interface',
        choice3:'Object',
        choice4:'None of these',
        answer:1
    },
    {
        q1:'What is the range of data type short in Java?',
        choice1:'-128 to 127',
        choice2:'-32768 to 32767',
        choice3:'-2147483648 to 2147483647',
        choice4:' None of the mentioned',
        answer:1
    },
    {
        q1:'Which data type value is returned by all transcendental math functions?',
        choice1:'int',
        choice2:'float',
        choice3:'double',
        choice4:'long',
        answer:2
    },
    {
        q1:'Which of these class is superclass of String and StringBuffer class?',
        choice1:'java.util',
        choice2:'java.lang',
        choice3:'ArrayList',
        choice4:' None of the mentioned',
        answer:2
    },
    {
        q1:'Which of these operators can be used to concatenate two or more String objects?',
        choice1:'+',
        choice2:'-',
        choice3:'+=',
        choice4:'||',
        answer:1
    },
]
startGame=()=>{
    availableQuestions = [...questions];
    questionCounter = 0;
    isAcceptingAnswers = false;
    getNewQuestion();
};

getNewQuestion=()=>{
    if(availableQuestions.length===0||index>=MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore',score);
        return  window.location.assign('./end.html');
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`
    printedQuestion = questions[index++];
    currentQuestion.innerText = printedQuestion.q1;
    choices.forEach((choice)=>{
        let number = choice.dataset['number']; 
        choice.innerText = printedQuestion["choice"+number];
    })
    availableQuestions.splice(index,1);
    isAcceptingAnswers=true;
};

choices.forEach((choice)=>{
    choice.addEventListener('click',event=>{
        if(!isAcceptingAnswers){
            return;
        }
        isAcceptingAnswers=false;
        selectedChoice = event.target.dataset['number']==printedQuestion.answer?'correct':'incorrect'
        if(selectedChoice=='correct'){
            score=score+100;
            scoreText.innerText = score; 
        }
        choice.parentElement.classList.add(selectedChoice);
        setTimeout(()=>{
            choice.parentElement.classList.remove(selectedChoice);
            getNewQuestion();
        },1000);
    })
});

startGame();

