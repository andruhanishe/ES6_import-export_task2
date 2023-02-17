import './index.css';

const cookie = document.querySelector('.cookie-consent')
const button = cookie.querySelector('.cookie-consent__button')
cookie.style.display = localStorage.getItem('displayCookie')

button.addEventListener('click', (event) => {
    localStorage.setItem('displayCookie', 'none')
    cookie.style.display = localStorage.getItem('displayCookie')
})
