const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body')
buttons.forEach((button) => {
  // console.log(button)
  // console.log(button.id)
  button.addEventListener('click', (event) =>{
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.id)

    if(event.target.id === "grey"){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id === "white"){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id === "blue"){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id === "yellow"){
      body.style.backgroundColor = event.target.id
    }
  })
})