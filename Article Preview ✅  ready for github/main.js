const showSocial = document.querySelector('.share');
const hideSocial = document.querySelector('.shareSocial');
const socialMedia = document.querySelector('.socialMedia');


showSocial.addEventListener('click', ()=>{
    socialMedia.classList.toggle('active');
})

hideSocial.addEventListener('click', ()=>{
   socialMedia.classList.toggle('active');
    
})
