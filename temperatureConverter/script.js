const temperature = document.querySelector('#temperature')
const unit = document.querySelector('#unit')
const convert = document.querySelector('#convert')
const result = document.querySelector('#result')

convert.addEventListener('click',function(){
    if(unit.value ==='celsius'){
        result.innerHTML = ((parseFloat(temperature.value))*9)/5 +32
    }
    else if(unit.value ==='fahrenheit'){
        result.innerHTML = (((parseFloat(temperature.value))-32)*5)/9
    }
})