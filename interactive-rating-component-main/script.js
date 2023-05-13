const submit = document.querySelector(".submit")
const rateBtns = document.querySelector(".rate-btn")
const p = document.querySelector('.selected-rate')
const thxPanel = document.querySelector('.thx-panel')
const error = document.querySelector('.error')
const ratePanel = document.querySelector('.rate-panel')
let rate,count

const changeBc = (e) => {
	console.log(e.target)
    if(e.target.id === 'five'){
        e.target.classList.toggle('clickedMax')
    }
    else {
        e.target.classList.toggle('clicked')
    }
    
}

const validRate = () => {
    btns = rateBtns.querySelectorAll('button')
    count = 0
    btns.forEach(el => {
        if (el.classList.contains('clicked') || el.classList.contains('clickedMax')){
            count++
            rate = el.textContent
        }
    })
    if (count !== 1){
        error.textContent = 'Please pick just one rate!'
    }
    else{
        error.textContent = ''
        showThx(rate)
    }
}

const showThx = (rate) => {
    p.textContent = rate
    thxPanel.style.display = 'flex'
    ratePanel.style.display ='none'
}

rateBtns.addEventListener('click', changeBc)
submit.addEventListener('click', validRate)