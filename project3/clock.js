const clock = document.getElementById('clock')
// console.log(clock)

// const date = new Date();
// console.log(date.toLocaleTimeString())
setInterval(function(){ //use to set the time interval in which function work
  const date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
},1000)