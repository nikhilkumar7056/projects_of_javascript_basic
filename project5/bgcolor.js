const startbtn = document.querySelector('#start')
const stopbtn = document.querySelector('#stop')

// generate color with hex code the code of an color is 6 digit

const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
        
    }
    return color;
}

 let intervalID = null;
const startChangingBGC = function(){
    function changeBGcolor () {
        document.body.style.backgroundColor = randomColor();
    }
    
    if(intervalID === null){
    intervalID = setInterval(changeBGcolor,1000)
    }
}

const stopChangingBGC = function(){
    clearInterval(intervalID)
    intervalID = null;
}

startbtn.addEventListener('click', startChangingBGC)
stopbtn.addEventListener('click',stopChangingBGC)