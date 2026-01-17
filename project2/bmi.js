const form = document.querySelector('form')
// const height = document.querySelector('#height') this usecase give empty value


form.addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log(e)
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  // console.log(`${height} and ${weight}`);
  const result = document.querySelector('#results')

  // console.log(result)
  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `Please enter valid height ${height}`;
  }else if(weight === '' || height < 0 || isNaN(weight)){
    result.innerHTML = `Please enter valid value of weight ${weight}`
  }else{
    const BMI = Number(weight / ((height * height) /10000)).toFixed(2)
    if(BMI < 18.6){
        result.innerHTML = `<span>your BMI ${BMI} (Under weight)</span>`
    }else if(BMI >= 18.6 && BMI <= 24.9){
         result.innerHTML = `<span>your BMI ${BMI} (Normal weight)</span>`
    }else {
        result.innerHTML = `<span>your BMI ${BMI} (Overweight)</span>`
    }
  }

});
