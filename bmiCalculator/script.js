const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const results = document.querySelector('#results')
const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const heightvalue = parseInt(height.value)
    const weightvalue = parseInt(weight.value)
    const bmi = weightvalue/((heightvalue/100)**2);
    results.innerHTML = bmi.toFixed(2)
})