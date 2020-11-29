const nextSlide = document.querySelector('#john .direction');
const Tanya = document.querySelector('#tanya');
const John = document.querySelector('#john');



nextSlide.addEventListener('click', ()=>{
    Tanya.classList.toggle('off')
    John.classList.toggle('off')

})



