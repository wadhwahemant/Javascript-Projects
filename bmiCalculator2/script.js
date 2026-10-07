const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const form = document.querySelector('form')
const results = document.querySelector('#results')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    results.innerHTML=''
    const bmi = (parseInt(weight.value)/(((parseInt(height.value))/100)**2)).toFixed(2)
    const bmiNode = document.createTextNode(bmi)
    results.appendChild(bmiNode)
    
})
