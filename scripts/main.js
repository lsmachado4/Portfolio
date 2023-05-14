/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*=============== REMOVE MENU ===============*/

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== EMAIL JS ===============*/
/* TODO:Rever parte do código */
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    //Before proceeding, I recommend creating your EmailJs account(https://www.emailjs.com/)

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_9llk1ta', 'template_7nahmnb', '#contact-form', 'JQ4_9yI43wwT-MNGZ')
        .then(() => {
            contactMessage.textContent = 'Mensagem enviada com sucesso! ✅'
        }, () => {
            contactMessage.textContent = 'Mensagem não enviada (erro no servidor) ❌'
        })

}

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll s higher than 350 viewport height, add the show-scroll class to the tag with the scroll up
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration:'2500',
    delay:'400',
    /* reset: 'true', */ //Animations repeat
})

scrollReveal.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
scrollReveal.reveal(`.home__image`, { origin: 'bottom' })
scrollReveal.reveal(`.about__data, .skills__data`, { origin: 'left' })
scrollReveal.reveal(`.skills__content`, { origin: 'right' })
scrollReveal.reveal(`.projects__card`, { interval: 100 })