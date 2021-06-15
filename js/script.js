function realTimer() {
    const now = new Date()
    const xnow = new Date(2021,9,1)
    const timer = xnow.getTime() - now.getTime()    
    const day = parseInt(timer /(24*60*60*1000))
    const hour = parseInt(timer/(60*60*1000)) % 24
    const minute = parseInt(timer/(60*1000)) % 60
    const sec = parseInt(timer/1000) % 60
    const siteDay = document.querySelector('.main-screen__day')
    const siteHour = document.querySelector('.main-screen__hour')
    const siteMinute = document.querySelector('.main-screen__minute')
    const siteSecond = document.querySelector('.main-screen__second')
    siteDay.innerHTML = day
    siteHour.innerHTML = hour
    siteMinute.innerHTML = minute
    siteSecond.innerHTML = sec
    setTimeout(realTimer,1000)
}
realTimer()

const elems = document.querySelectorAll('a[href^="#"]:not(a[href="#"]');
elems.forEach((el) => {
  el.addEventListener('click',(event) => {
    event.preventDefault()
    const id = el.getAttribute('href').substring(1)
   
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
    
  })
})

new JustValidate('.footer__form', {
    rules: {      
      email: {
        required: true,
        email: true
      },
    },
    messages: {      
      email: {
        required: 'Поле обязательное для заполнения',
        email: 'email должен быть корректным'
      },
    },
  });

const menu = document.querySelector('.header__nav')
const burger = document.querySelector('.header__burger')

const toggleMenu = () => {
  menu.classList.toggle('header__nav_activ')
  burger.classList.toggle('header__burger_active')
}

burger.addEventListener('click', toggleMenu)

const closeMenu = () => {
  menu.classList.remove('header__nav_activ')
  burger.classList.remove('header__burger_active')
}

menu.addEventListener('click', (event) => {
 if (event.target.classList.contains('header__link')) {
    closeMenu()
  }
})