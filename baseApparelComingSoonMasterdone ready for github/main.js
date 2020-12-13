const input = document.querySelector('.mail input').value;
const inputClass = document.querySelector('.mail input');
const info = document.querySelector('.info');
const btn = document.querySelector('.send');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const validation = () => {
    if (!input.match(pattern)) {
        inputClass.classList.add('error');
        info.classList.add('active');
    } else {
        inputClass.classList.remove('error');
        info.classList.remove('active');

    }
}

btn.addEventListener('click', validation)