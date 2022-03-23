setInterval(setClock, 1000)

// selecting hands for rotation 
const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')

function setClock(){

    // to assign current time 
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours())/12

// to call function of below 
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)   
    setRotation(hourHand, hoursRatio)
}

// function for syncing time with rotation of hands 
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
}

setClock()

// next method 

// const sc = document.querySelector('#second')
// const mn = document.querySelector('#minute')
// const hr = document.querySelector('#hour')

// setInterval(() =>{
//     let day = new Date();
//     let hh = day.getHours()*30;
//     let mm= day.getMinutes()*6;
//     let ss = day.getSeconds()*6;
//     hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
//     mn.style.transform = `rotateZ(${mm}deg)`;
//     sc.style.transform = `rotateZ(${ss}deg)`;
// })