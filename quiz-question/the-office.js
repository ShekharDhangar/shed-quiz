
const allQuestions = document.querySelectorAll(".quiz-box");
const allNextBtns = document.querySelectorAll('.next-btn');

allNextBtns.forEach(nextBtn=> nextBtn.addEventListener('click',shiftToNxtQuestion) )

function shiftToNxtQuestion(event){
    const nextQuestionBox = event.target.parentElement.parentElement.parentElement.nextElementSibling
    const currentQuestionBox = event.target.parentElement.parentElement.parentElement;
    currentQuestionBox.classList.toggle('none')
    nextQuestionBox.classList.toggle('none');
}