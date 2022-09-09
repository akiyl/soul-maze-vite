import { animate } from "motion"

// Animate via selector


// import '../styles/style.scss'
const navMenu = document.querySelector('#nav_button')

const content = document.querySelector('#nav_content')
const content2 = document.querySelector('.nav_black_screen')
const polygon = document.querySelector('#polygon')
const ellipse1 = document.querySelector('#path_elp1')
const ellipse2 = document.querySelector('#path_elp2')
const ellipse3 = document.querySelector('#path_elp3')
const path = document.querySelector('#polygon')




let open = false
navMenu.addEventListener('click', () => {

    content2.classList.toggle('hide')

    if (window.matchMedia("(max-width:700px)")) {
        console.log("fuck")
        if (open == false) {
            open = true

            animate("nav", { opacity: [90, 100], x: ['-100vw', '0vw'] }, { duration: 0.2, easing: 'ease-out' })
        } else {
            open = false
            animate("nav", { opacity: [100, 90], x: ['0vw', '-100vw'] }, { duration: 0.2, easing: 'ease-out' })
        }
    } else {
        if (open == false) {
            open = true

            animate("nav", { opacity: [90, 100], x: ['-30vw', '0vw'] }, { duration: 0.2, easing: 'ease-out' })
        } else {
            open = false
            animate("nav", { opacity: [100, 90], x: ['0vw', '-30vw'] }, { duration: 0.2, easing: 'ease-out' })
        }
    }




    // content2.classList.toggle('hide')
    if (path.classList === 'red') {
        path.classList.remove('red')
    }
    path.classList.toggle('red')
    ellipse1.classList.toggle('white')
    ellipse2.classList.toggle('white')
    ellipse3.classList.toggle('white')
})