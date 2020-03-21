var score  = localStorage.getItem('mostRecentScore');
const h1 = document.getElementById('heading');
const scoreText = document.getElementById('score');

if(score==300){
    h1.innerText='😄';
    scoreText.innerText=score;
}
else if(score==200){
    h1.innerText='😐';
    scoreText.innerText=score;
}
else if(score==400){
    h1.innerText='😁';
    scoreText.innerText=score;
}
else if(score==500){
    h1.innerText='😎';
    scoreText.innerText=score;
}
else if(score==100){
    h1.innerText='😥';
    scoreText.innerText=score;
}
else if(score==0){
    h1.innerText='😰';
    scoreText.innerText=score;
}