// import '../styles/style.scss'
const navMenu = document.querySelector('#nav_button')

const content = document.querySelector('#nav_content')
const polygon = document.querySelector('#polygon')
const ellipse1 = document.querySelector('#path_elp1')
const ellipse2 = document.querySelector('#path_elp2')
const ellipse3 = document.querySelector('#path_elp3')
const path = document.querySelector('#polygon')
navMenu.addEventListener('click', () => {
    content.classList.toggle('hide')
    if (path.classList === 'red') {
        path.classList.remove('red')
    }
    path.classList.toggle('red')
    ellipse1.classList.toggle('white')
    ellipse2.classList.toggle('white')
    ellipse3.classList.toggle('white')
})