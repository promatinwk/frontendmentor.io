const accordion = document.getElementsByClassName('arrow');
const answerMe = document.getElementsByClassName('question');


for(let i=0; i<answerMe.length; i++){
    answerMe[i].addEventListener('click', ()=>{
        answerMe[i].classList.toggle('active');
        accordion[i].classList.toggle('rotate');
    })
}