const price = document.querySelector('#price')
const quantity = document.querySelector('#quantity')
const result = document.querySelector('#result')
const submit = document.querySelector('#submit')
submit.addEventListener('click',()=>{
    const value = parseFloat(price.value)*parseInt(quantity.value)
    result.innerText = `Total:₹ ${value}`
})